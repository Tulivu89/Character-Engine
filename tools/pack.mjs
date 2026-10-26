// Builds the installable Character Engine from its full source.
//
//   node tools/pack.mjs           write character-engine.naiscript from src/character-engine.naiscript
//   node tools/pack.mjs --check   build in memory and fail if the committed file differs
//
// WHY A PACKED FILE AT ALL: NovelAI will not load the full source (about 5 MB). The packed
// file is the same program at about a quarter of the size, in three steps:
//   1. esbuild strips the TypeScript and minifies the body (the frontmatter is kept verbatim).
//   2. Vector icon paths (CE_ICON_LIB: objects with a `vb` and `parts[].d`) are rounded to a
//      precision set by their viewBox, about 1/200 of its larger side, and rewritten in the
//      shortest path syntax. At the size the map draws them the rounding cannot be seen.
//   3. Every string literal of 16 or more characters that is not an object key moves into one
//      table, deduplicated, joined by \x01, deflated, and base85-encoded. Each use becomes $Q[n].
//   4. A small loader in front of the program inflates the table once, at load.
// The loader is fixed text, the same one every earlier release shipped with.
//
// Deterministic: pinned esbuild and acorn (tools/package.json), so the same source always
// packs to the same bytes, and --check can compare files instead of behaviour.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateRawSync } from 'node:zlib';
import * as esbuild from 'esbuild';
import * as acorn from 'acorn';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = resolve(ROOT, 'src/character-engine.naiscript');
const OUT = resolve(ROOT, 'character-engine.naiscript');
const MIN_LEN = 16;
const SEP = '\x01';
const TABLE = '$Q';
const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#";
const LOADER_HEAD = "\nvar $Q=(function(){var A=\"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#\",";   // '\nvar $Q=(function(){var A="<alphabet>",' then Z="...",M=<n>,
const LOADER_TAIL = "m={},i,k;for(i=0;i<85;i++)m[A.charCodeAt(i)]=i;var s=new Uint8Array(Z.length/5*4),o=0;for(i=0;i<Z.length;i+=5){var v=0;for(k=0;k<5;k++)v=v*85+m[Z.charCodeAt(i+k)];s[o++]=v>>>24&255,s[o++]=v>>>16&255,s[o++]=v>>>8&255,s[o++]=v&255}var out=new Uint8Array(M),op=0,ip=0,bb=0,bc=0;function bits(n){for(;bc<n;)bb|=s[ip++]<<bc,bc+=8;var x2=bb&(1<<n)-1;return bb>>>=n,bc-=n,x2}function build(l,n){var c2=new Uint16Array(16),y=new Uint16Array(n),f=new Uint16Array(16),j;for(j=0;j<n;j++)c2[l[j]]++;for(c2[0]=0,j=1;j<16;j++)f[j]=f[j-1]+c2[j-1];for(j=0;j<n;j++)l[j]&&(y[f[l[j]]++]=j);return{c:c2,s:y}}function dec(h){var code=0,first=0,idx=0,len2,cnt;for(len2=1;len2<16;len2++){if(code|=bits(1),cnt=h.c[len2],code-cnt<first)return h.s[idx+(code-first)];idx+=cnt,first+=cnt,first<<=1,code<<=1}throw new Error(\"CE string table: bad code\")}var LB=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],LE=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],DB=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],DE=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],OR=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],last,type,lh,dh,len,sym,d;do{if(last=bits(1),type=bits(2),type===0){for(bb=0,bc=0,len=s[ip]|s[ip+1]<<8,ip+=4;len--;)out[op++]=s[ip++];continue}if(type===1){var fl=new Uint8Array(288);for(i=0;i<288;i++)fl[i]=i<144?8:i<256?9:i<280?7:8;lh=build(fl,288);var fd=new Uint8Array(30);for(i=0;i<30;i++)fd[i]=5;dh=build(fd,30)}else{var nl=bits(5)+257,nd=bits(5)+1,nc=bits(4)+4,ln=new Uint8Array(320);for(i=0;i<nc;i++)ln[OR[i]]=bits(3);var ch=build(ln,19),x=0,r,pv;for(ln=new Uint8Array(320);x<nl+nd;){if(sym=dec(ch),sym<16){ln[x++]=sym;continue}for(sym===16?(pv=ln[x-1],r=3+bits(2)):sym===17?(pv=0,r=3+bits(3)):(pv=0,r=11+bits(7));r--;)ln[x++]=pv}lh=build(ln.subarray(0,nl),nl),dh=build(ln.subarray(nl),nd)}for(;;){if(sym=dec(lh),sym<256){out[op++]=sym;continue}if(sym===256)break;sym-=257,len=LB[sym]+bits(LE[sym]);var ds=dec(dh);for(d=DB[ds]+bits(DE[ds]);len--;)out[op]=out[op-d],op++}}while(!last);for(var parts=[],ck=[],c,q=0;q<M;)c=out[q++],c>=240?(c=(c&7)<<18|(out[q++]&63)<<12|(out[q++]&63)<<6|out[q++]&63,c-=65536,ck.push(55296+(c>>10)),c=56320+(c&1023)):c>=224?c=(c&15)<<12|(out[q++]&63)<<6|out[q++]&63:c>=192&&(c=(c&31)<<6|out[q++]&63),ck.push(c),ck.length>8e3&&(parts.push(String.fromCharCode.apply(null,ck)),ck=[]);return parts.push(String.fromCharCode.apply(null,ck)),parts.join(\"\").split(\"\u0001\")})();";  // the inflater, ending in .split("\x01")})();

function splitHeader(text) {
  if (!text.startsWith('/*---')) throw new Error('source does not start with the /*--- header');
  const end = text.indexOf('---*/');
  if (end < 0) throw new Error('source has no closing ---*/');
  return { header: text.slice(0, end + 5), body: text.slice(end + 5) };
}

function walk(node, parent, key, visit) {
  if (!node || typeof node.type !== 'string') return;
  visit(node, parent, key);
  for (const k of Object.keys(node)) {
    if (k === 'type' || k === 'start' || k === 'end') continue;
    const v = node[k];
    if (Array.isArray(v)) { for (const c of v) walk(c, node, k, visit); }
    else if (v && typeof v.type === 'string') walk(v, node, k, visit);
  }
}

// Which string literals can move into the table. An object key or a class member name is
// syntax, not a value; an import source and a directive must stay literal.
// A template literal with no ${} is a plain string and moves too; a tagged one (String.raw``)
// is a call and does not.
function stringValue(node, parent) {
  if (node.type === 'Literal' && typeof node.value === 'string') return node.value;
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0 &&
      !(parent && parent.type === 'TaggedTemplateExpression') &&
      typeof node.quasis[0].value.cooked === 'string') return node.quasis[0].value.cooked;
  return null;
}

function isTableable(node, parent, key, value) {
  if (value === null) return false;
  if (value.length < MIN_LEN) return false;
  if (value.indexOf(SEP) >= 0) return false;
  if (parent && key === 'key' && !parent.computed &&
      (parent.type === 'Property' || parent.type === 'MethodDefinition' || parent.type === 'PropertyDefinition')) return false;
  if (parent && (parent.type === 'ImportDeclaration' || parent.type === 'ExportAllDeclaration' ||
                 parent.type === 'ExportNamedDeclaration' || parent.type === 'ImportExpression') && key === 'source') return false;
  if (parent && parent.type === 'ExpressionStatement' && parent.directive) return false;
  return true;
}

// ── Icon paths ───────────────────────────────────────────────────────────────
function propOf(obj, name) {
  for (const p of obj.properties) {
    if (p.type === 'Property' && !p.computed && p.key &&
        ((p.key.type === 'Identifier' && p.key.name === name) ||
         (p.key.type === 'Literal' && p.key.value === name))) return p.value;
  }
  return null;
}

function pathDecimals(vb) {
  const dim = Math.max(vb[2], vb[3]);
  let dec = 0;
  while (dec < 3 && Math.pow(10, -dec) > dim / 200) dec++;
  return dec;
}

function pathNumber(x, dec) {
  let s = String(Number(x.toFixed(dec)));
  if (s === '-0') s = '0';
  if (s.startsWith('0.')) s = s.slice(1);
  else if (s.startsWith('-0.')) s = '-' + s.slice(2);
  return s;
}

// Commands are kept exactly as written (case, z or Z, no implicit-command folding). Numbers are
// rounded and joined by the shortest separator: none before a minus, none before a leading dot
// when the previous number already has one, a space otherwise.
export function minifyPath(d, dec) {
  const re = /([A-Za-z])|([+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/g;
  let out = '', prev = '', m;
  while ((m = re.exec(d))) {
    if (m[1]) { out += m[1]; prev = 'cmd'; continue; }
    const s = pathNumber(Number(m[2]), dec);
    if (prev !== 'cmd' && prev !== '' && !(s.startsWith('-') || (s.startsWith('.') && prev.includes('.')))) out += ' ';
    out += s;
    prev = s;
  }
  return out;
}

// start offset of each icon path literal -> its rounded text
function iconPaths(ast) {
  const found = new Map();
  walk(ast, null, null, function(node) {
    if (node.type !== 'ObjectExpression') return;
    const vb = propOf(node, 'vb'), parts = propOf(node, 'parts');
    if (!vb || vb.type !== 'ArrayExpression' || vb.elements.length !== 4) return;
    if (!parts || parts.type !== 'ArrayExpression') return;
    const nums = vb.elements.map(function(e) { return e && e.type === 'Literal' && typeof e.value === 'number' ? e.value : NaN; });
    if (nums.some(function(n) { return !isFinite(n); })) return;
    const dec = pathDecimals(nums);
    for (const part of parts.elements) {
      if (!part || part.type !== 'ObjectExpression') continue;
      const d = propOf(part, 'd');
      const v = d ? stringValue(d, part) : null;
      if (v !== null) found.set(d.start, minifyPath(v, dec));
    }
  });
  return found;
}

function base85(bytes) {
  const pad = (4 - (bytes.length % 4)) % 4;
  const b = new Uint8Array(bytes.length + pad);
  b.set(bytes);
  let out = '';
  for (let i = 0; i < b.length; i += 4) {
    let v = ((b[i] << 24) >>> 0) + (b[i + 1] << 16) + (b[i + 2] << 8) + b[i + 3];
    const chunk = new Array(5);
    for (let k = 4; k >= 0; k--) { chunk[k] = ALPHABET[v % 85]; v = Math.floor(v / 85); }
    out += chunk.join('');
  }
  return out;
}

export async function pack(sourceText) {
  const { header, body } = splitHeader(sourceText);
  const res = await esbuild.transform(body, {
    loader: 'ts', minify: true, format: 'iife', target: 'esnext',
    charset: 'ascii', legalComments: 'none', logLevel: 'silent'
  });
  let code = res.code;
  if (new RegExp('(^|[^\\w$])\\' + TABLE + '([^\\w$]|$)').test(code)) {
    throw new Error('the minified program already uses the name ' + TABLE);
  }

  const ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'script' });
  const paths = iconPaths(ast);
  const hits = [];
  walk(ast, null, null, function(node, parent, key) {
    const raw = stringValue(node, parent);
    if (raw === null) return;
    const value = paths.has(node.start) ? paths.get(node.start) : raw;
    if (isTableable(node, parent, key, value)) hits.push({ start: node.start, end: node.end, value: value, inline: false });
    else if (value !== raw) hits.push({ start: node.start, end: node.end, value: value, inline: true });
  });
  hits.sort(function(a, b) { return a.start - b.start; });

  const index = new Map();
  const table = [];
  for (const h of hits) {
    if (h.inline) continue;
    if (!index.has(h.value)) { index.set(h.value, table.length); table.push(h.value); }
  }
  // Rebuild back to front so earlier offsets stay valid. `return"..."` must become
  // `return $Q[n]`, so a reference after an identifier character gets a space.
  let out = code;
  for (let i = hits.length - 1; i >= 0; i--) {
    const h = hits[i];
    const before = out.charAt(h.start - 1);
    const ref = h.inline ? JSON.stringify(h.value)
              : (/[\w$]/.test(before) ? ' ' : '') + TABLE + '[' + index.get(h.value) + ']';
    out = out.slice(0, h.start) + ref + out.slice(h.end);
  }
  acorn.parse(out, { ecmaVersion: 'latest', sourceType: 'script' });   // throws if broken

  const raw = Buffer.from(table.join(SEP), 'utf8');
  const z = base85(deflateRawSync(raw, { level: 9 }));
  const loader = LOADER_HEAD + 'Z="' + z + '",M=' + raw.length + ',' + LOADER_TAIL;

  // The loader must give back exactly the table it was built from.
  const back = new Function(loader.trim() + '\nreturn ' + TABLE + ';')();
  if (back.length !== table.length || back.some(function(s, i) { return s !== table[i]; })) {
    throw new Error('the string table does not round-trip');
  }

  return {
    text: header + loader + '\n' + out,
    stats: { strings: table.length, refs: hits.filter(function(h) { return !h.inline; }).length, iconPaths: paths.size, tableBytes: z.length,
             codeBytes: out.length, sourceBytes: Buffer.byteLength(sourceText, 'utf8') }
  };
}

async function main() {
  const check = process.argv.includes('--check');
  const src = readFileSync(SRC, 'utf8');
  const { text, stats } = await pack(src);
  const total = Buffer.byteLength(text, 'utf8');
  const ver = (/^version:\s*(\S+)/m.exec(src) || [])[1] || '?';
  console.log('Character Engine ' + ver + ': ' + stats.sourceBytes + ' bytes of source -> ' + total +
              ' packed (' + stats.strings + ' strings, ' + stats.refs + ' uses, table ' +
              stats.tableBytes + ', code ' + stats.codeBytes + ')');
  if (check) {
    let have = '';
    try { have = readFileSync(OUT, 'utf8'); } catch (e) { have = ''; }
    if (have !== text) {
      console.error('character-engine.naiscript is not the packed build of src/character-engine.naiscript. Run: node tools/pack.mjs');
      process.exit(1);
    }
    console.log('character-engine.naiscript matches the source.');
    return;
  }
  writeFileSync(OUT, text);
  console.log('wrote character-engine.naiscript');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(function(e) { console.error(e && e.message ? e.message : e); process.exit(1); });
}
