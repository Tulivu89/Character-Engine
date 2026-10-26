// Loads a packed Character Engine in a stand-in for NovelAI's script worker and checks that it
// starts: the string table inflates, the program runs to the end without throwing, and it
// registers the hooks it starts from. This is a load check, not a test of behaviour.
//
//   node tools/load-test.mjs [file]      default: character-engine.naiscript
//
// The stand-in api answers every call with an empty promise, so nothing past the first
// await of a hook body is exercised; the hooks are called once each to catch a synchronous
// throw at their top.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const file = resolve(ROOT, process.argv[2] || 'character-engine.naiscript');
const text = readFileSync(file, 'utf8');
const body = text.slice(text.indexOf('---*/') + 5);

const calls = [];
const hooks = [];
const errors = [];
function stub(path) {
  const fn = function() {};
  return new Proxy(fn, {
    get(t, k) {
      if (k === 'then') return undefined;
      if (k === Symbol.toPrimitive) return function() { return 0; };
      if (k === 'toString' || k === 'valueOf') return function() { return ''; };
      return stub(path + '.' + String(k));
    },
    apply(t, self, args) {
      calls.push(path);
      if (path === 'api.v1.hooks.register') hooks.push({ name: String(args[0]), fn: args[1] });
      if (path === 'api.v1.error') errors.push(args.map(String).join(' '));
      return Promise.resolve(undefined);
    }
  });
}
const ctx = {
  api: stub('api'),
  h: function(tag, props) { return { tag: tag, props: props || {}, kids: [].slice.call(arguments, 2) }; },
  useState: function(v) { return [v, function() {}]; },
  useStoreValue: function(s) { return s && s.get ? s.get() : {}; },
  useEffect: function() {}, useRef: function(v) { return { current: v }; },
  createStore: function(init) { var st = init; return { get: function() { return st; }, set: function(f) { st = typeof f === 'function' ? f(st) : f; }, subscribe: function() { return function() {}; } }; },
  setTimeout, clearTimeout, Promise, Date, Math, JSON, console
};
vm.createContext(ctx);

let failed = false;
try {
  vm.runInContext(body, ctx, { filename: file, timeout: 20000 });
} catch (e) {
  console.error('LOAD FAILED: ' + (e && e.stack ? e.stack.split('\n').slice(0, 3).join(' | ') : e));
  process.exit(1);
}
const table = vm.runInContext('typeof $Q !== "undefined" ? $Q.length : -1', ctx);
console.log('loaded ' + (file.startsWith(ROOT + '/') ? file.slice(ROOT.length + 1) : file) + ': string table ' + table + ' entries, ' +
            calls.length + ' host calls at load, hooks: ' + (hooks.map(function(h) { return h.name; }).join(', ') || 'none'));
if (table < 1) { console.error('string table missing'); failed = true; }
if (!hooks.some(function(h) { return h.name === 'onScriptsLoaded'; })) { console.error('no onScriptsLoaded hook registered'); failed = true; }
for (const hk of hooks) {
  try { const r = hk.fn({}); if (r && typeof r.catch === 'function') r.catch(function() {}); }
  catch (e) { console.error('hook ' + hk.name + ' threw synchronously: ' + (e && e.message)); failed = true; }
}
await new Promise(function(r) { setTimeout(r, 200); });
process.exit(failed ? 1 : 0);
