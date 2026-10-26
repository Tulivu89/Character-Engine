# CE-INDEX

Engine: 3.14.9

The grep directory for `character-engine.naiscript`: subject, token, the rule in one line. The reasoning lives at the code under each token -- `grep '\[TOKEN\]'` finds it. This file is a locator, not a second copy of the comments; a line that grows into an explanation should move to its site.

Conventions the checker (`ce_index_check.py`) enforces:

- An entry is a bullet that opens with one or more backticked tokens, then ` -- ` and the rule.
- Every token listed must appear in the engine file.
- A token prefixed `~` records a decision taken and **not** built. It must *not* appear in the file; when it does, the `~` is stale.
- Tokens under **Measured platform facts** are exempt: a measured runtime fact has no site once its instrument is gone.
- Every `[TAG]` in the engine file must be listed here or sit in the checker's baseline.
- The `Engine:` line above must match the file header's `version:`.

Update this file in the same patch as any change it describes.

## Grep directory

### State, Rolls, Stakes

- `STATE-ONE-PRIM` `BAND-GATES-CTX` `STATE-ADDR` -- one primitive (bounded integer), its projection, its verbs
- `SCALE-BAND` -- scales are band-sized; pressure is the only non-state target
- `STAKE-DEFAULT` -- a stake is a default first, a choice second; the ledger keeps the ref and the REAL delta
- `STAKE-REVERSE` -- reversal is one-use and reverses only stored deltas
- `STAKE-ADDR` -- a stake ref stores its owner and resolves nothing later, because the ledger outlives the roll
- `MISS-NAMED` -- a cell that cannot be written is reported with its own reason, never skipped
- `ROLL-ZERO` -- zero dice is a no-roll resolution, not a second subsystem
- `ARM-SURVIVES` -- the arm survives a roll; the spend does not
- `BONUS-BOUGHT` -- a bonus is bought, not typed; ceSpendForBonus, CE_SPEND_MAX
- `RESOLUTION-VOCAB` -- which table judges an attempt is world vocabulary, not a per-turn choice; schema 7 deletes the seeded no-roll def
- `NUM-SHAPE` -- a bounded number has a shape: pips vs bar, chosen by span
- `HIDE-AT-START` -- hideAtStart hides a row and changes nothing a reader sees
- `CAT-ORDER` -- authored category order; an order list, not a category record
- `COND-SHAPE` -- a condition is a SHAPE, not a kind; the seeds exist to show it
- `EVT-BAND` -- a terminal is addressed by band INDEX or by bound, never both
- `STORAGE_POS_TERMINUS` -- either terminus raises a Standing rewrite, prefilled
- `THOUGHT-TRAIL` -- ONE trail under Pressure, whole snapshots and both stamps on the row -- not one field of it split across two axes. The projection index IS the edit address, so it never sorts, filters or compacts
- `THOUGHT-EDIT` -- the three authored fields of a snapshot are writable, the evidence stamps are not; compressedLine is DERIVED by _ceComposeThoughtLine and index 0 writes char.ephemeral as well, because that is the copy INJECTION reads
- `SB-TAIL` -- the newest end of the block, REPEATED and named at the prefill fence. The story itself does not move, so SB-PREFIX's shared prefix is untouched; derived from _ceSBText, never a second document read
- `THINK-NOW` -- the beat pass has a door: cadence, relevance, cap and the enable flag are all bypassed, the budget is NOT pre-gated (HELP-ON-WALL owns that), and the story block is REBUILT first because ceStoryBlockText is a per-pass cache

### Encounters

- `EVENT` -- a MILESTONE WITH A TRACK: foes are milestone.text, progress is one bounded number of scope 'event' owned by the milestone id
- `EVENT-ONE` -- one live encounter, DERIVED by ceLiveEvent from the two places one can be, so there is no flag to drift
- `EVENT-LOOSE` -- the threadless store has no entity, so its archive is capped at the conclude instead of reaped
- `EVENT-STAKE` -- the fight's wager rides every roll and joins the ONE ledger
- `EVENT-TURN` -- ceEventTurnLine leads the spliced user turn; the AN carries it too and the duplication is the point
- `EVENT-DOOR` -- step 0 of the Actions panel, a SECTION and not a tab -- a tab would hide the fight at the moment the author is rolling against it
- `EVT-SHAPE` -- ten seeded shapes; the span counts successes and they count UP
- `EVT-MIRROR` -- two doors onto one encounter, symmetrical; neither owns a verb -- both press ceMilestoneOp
- `EVT-POLARITY` -- the meter's tint is derived from the wager, never declared
- `EV-SETTING` -- the encounter generator reads the location as a RECORD -- ancestors, its composed lorebook entry, its owner, and what is tied to it as a roster. One named participant gets its whole entry; the rest get a line, because input is the wall
- `EV-FLAVOR` -- the SECOND axis: what sort of thing is in the way, weighted per kind. A fixed flavour replaces CE_EV_DIVERGE, because deciding the sort and then asking for three sorts is two instructions and the model drops one
- `EV-ROLL` -- one press rolls shape, then flavour, then the record -- DICE, not the model -- and ends at the candidate strip, never at a committed encounter. A flavour that names a record type and finds none is redrawn without itself
- `ENC-INHERIT` -- a creature tied to the region is available in every place inside it; the candidate walk climbs parentId, connections read BOTH ways off the index
- `EV-OPEN` -- Begin FOLDS an introduce directive into the pending slot. ceEventTurnLine only prefixes a directive that is already there, so the first turn had none
- `EV-DOOR-SHUT` -- the start form is shut until asked for; a LIVE encounter is never collapsed, which is EVENT-DOOR unchanged

### Actions and Delivery

- `ARM-SEND` -- the armed move is primed in the panel and fired by NAI's Send
- `ROLLS-IN-SETTINGS` -- Rules > Rolls owns resolutions and stakes (it was Settings > Rolls; RULES-ROUTE)
- `ARM-KEEP` -- the attempt is consumed by a roll; approach, resolution, target and wager are not
- `CHARCHAT-PREFIX` -- CharChat writes the TAIL of context and nothing else; one builder, no swap
- `CHARCHAT-TAIL` -- exactly one trailing empty paragraph before any generation
- `DELIVERY-FOUR` -- the four delivery mechanisms and why the read channel was the fault
- `BRACKET-SHAPE` -- bracket shape rules -- live for the stepper-terminal writer
- `IMP-PIVOT` -- the onContextBuilt message ARRAY is ours to edit; storyText is not reachable below the framing
- `ARM-DIRECTIVE` -- a roll arms a silent directive spliced as a bare user message before the generation point. SUPERSEDES ATTEMPT-TYPED, which made it two sentences of story
- `PANEL-STEPS` -- the panel is four steps in the order they happen

### Generation Transport

- `GEN-THINK` -- a reasoning model leaks its scratchpad into the answer and enable_thinking is a REQUEST, not a guarantee
- `GEN-ROUTER` -- one door per transport and no bypasses: aeDiagGenerate wraps api.v1.generate, aeDiagGenerateWithStory wraps api.v1.generateWithStory
- `GEN-FAIL-KIND` -- a transport failure is not an answer

### Generation Delegation

- `HELP-MESH` -- a companion script carries its OWN output allowance, and delegation lands at the router so no caller in this file knows helpers exist
- `HELP-BUDGET-REPORTED` -- a helper REPORTS getAllowedOutput/getAllowedInput from inside its own scope
- `HELP-ON-WALL` -- THE MECHANISM. A local call that is REFUSED for budget is handed to a helper rather than thrown
- `HELP-BOTH-TRANSPORTS` -- BOTH ROUTERS DELEGATE, superseding HELP-DIRECT-ONLY: _aeGenRun sets _diagProbeActive around both, so a helper's story build is no different from ours
- `HELP-NEED-INPUT` -- THE WALL IS THE INPUT ALLOWANCE. These passes ask 24-400 output tokens against a charter-plus-transcript prompt
- `HELP-LOCAL-DRY` -- once the allowance refuses, stop asking it for a cooldown
- `HELP-CAPS` -- a helper DECLARES story support and absent means no. A helper that ignored the method would answer a story call with no story in it, which reads as working
- `HELP-LOCAL-FIRST` -- the local allowance is spent first; a mesh that round-robins keeps every allowance half full and empties them together
- `HELP-NO-FALLBACK` -- a failed delegation THROWS and is never re-run locally: the helper may still be generating, and the local allowance was already too small
- `HELP-DEAD-ONCE` -- one timeout marks a helper dead for the session, so a deleted helper costs one timeout and not one per call. Refresh clears the mark
- `HELP-NO-SIGNAL` -- a call carrying a CancellationSignal stays local -- the signal is an object in this worker and there is no verb to relay an abort
- `HELP-REGISTRY-EPHEMERAL` -- module state, NO storage key. Helpers announce on their load and this engine pings on its own, so it rebuilds from either end
- `HELP-HOOKS` -- A HELPER'S GENERATION FIRES THIS SCRIPT'S HOOKS. api.v1.generate builds story context and NAI runs every installed script's hooks for it
- `HELP-SEND-VOID` -- api.v1.messaging.send DOES NOT RELIABLY RETURN A PROMISE on this runtime
- `HELP-GUARD-FINALLY` -- _diagProbeActive and the busy flag are restored in a finally
- `HELP-CHANNEL` -- its own messaging channel; handleBridgeMessage is registered UNFILTERED and carries the matching early return
- `HELP-DEFAULT-ON` -- absent means on, summonOnMention's shape: installing a helper is the opt-in, and a switch found afterwards makes the install look broken

### Wizard Generation

- `YOINK-PREFILL` -- THE YOINK DOES NOT REPLACE THE CONTEXT. It appends one bracketed block to storyText's tail and the directive rides the PREFILL, never a spliced message
- `YOINK-PREFILL-FAIL` -- an override that throws leaves the context UNTOUCHED, so the failure is visible as a story continuation rather than silent truncation
- `IMP-PIVOT-GENPOINT` -- _ceGenPointIdx is the one answer to where the model starts writing -- found, not assumed

### The Old Wizard

- `WIZ-CUT` -- The old wizard is gone: its in-document chat, nine-tab surface, route and generation chain. Build is the one route.
- `LORE-ONE-FIELD` -- one lorebook editor; the drill is gone
- `CTX-SOURCE` -- one source-of-truth frame on the context itself, not per prompt
- `CTX-CLEAN` -- saved chats are PARSED, not pasted
- `SHELL-TAB` -- ceOpenShell forwards a tab to ceNav; ceNav clears the one it is not given
- `REL-PAIR-RETIRED` -- ce_fx_pos_history and ce_fx_pos_unsaid gone from BUILTIN_FACETS, v12
- `WELL-ONE` -- ceWell is the kit's read-only text payload
- `ACT-MODE` -- the panel has three shapes and the mode is a VALUE
- `ACT-STATES` -- the Actions panel has Roll and States tabs (CE_ACTIONS_TABS, scope 'actions'); States lists the protagonist and everyone present with ceStateGaugeRow steppers, published as stChars by cePublishActions; the profile republishes only when it shows that character
- `ACT-MODE-DOORS` -- two doors onto one field, against SPEC-CTX: 'none' unregisters the panel, so it cannot be its own way back
- `ACT-ODDS` -- exact for a plain table (a convolution bucketed through ceRollBand); a table using any dice rule is sampled, 2000 seeded rolls via ceRollWith, cached, rows flagged approx
- `DICE-RULES` -- RPG Dice's ruleset on ResolutionDef (fudge, explode, keep/keepN, edge, approachAs add|dice|target, zero pool, read sum|high|count, compare, target, basis value|margin|ratio, triggers); ceDiceRules clamps, ceDicePlain gates exact odds, ceRollWith rolls with an injected rng (ceDiceRng live, ceDiceSeeded for odds); RollBand.natural skipped by ceRollBand; arm carries dc/edge (reset on table change); ceResolve returns kept/against/applyAs/read/odds; both modes roll from rows (see ROLL-WITH); Rules > Rolls has Dice rules and Natural results folds
- `DICE-PRESETS` -- CE_DICE_PRESETS, RPG Dice's eight systems plus Genesys (pushed onto the list by DICE-NARRATIVE) as ascending CE tables with CE-voice notes and no wagers; ceDicePresetTable copies one with a fresh id; Rules > Rolls 'Add from a system' adds the table and its sheet (CE_DICE_SHEETS via ceDicePresetStates)
- `DICE-NARRATIVE` -- ResolutionDef.kind 'narrative' (rules.as reads 'narrative'): Genesys symbol dice; _ceNarrativeThrow builds the pool from ceRollWith's parts (row values in ceRollIds order: skill and characteristic -> ability/proficiency, extras and dial -> boost/setback, dc -> difficulty, edge -> upgrades) and scores success and advantage together (failure = net advantage, success = 1000 + it); triggers gain triumphs/despairs; CE_NARRATIVE_FACES, CE_DIE_KIND tokens (die-ability ... die-setback); rows publish parts; receipt rows From/Showed/Net
- `SYS-STATES` -- StateDef.system names the owning roll table; ceStateDefs/ceStateDef return only states in play (shared, or owned by ceDefaultResolutionId), ceStateDefsAll for the catalog editor, reseed and wager cells; CE_SYSTEM_SEEDED_IDS (Health, Stamina, Luck, Currency, the four approaches) owned by res_2d6, tagged in old worlds by schema v14; Rules > Rolls 'System in play' swaps tables and states, deleting a table deletes its states; Rules > States filter (ceFilter 'rules:states:system') and 'Belongs to'; Actions and Simple-wager lists offer only wagers judged by the table in play
- `ROLL-WITH` -- StateDef.rollWith (a skill rolls with its ability) and the armed withIds (toggled rows, consumed by the roll); ceRollIds lists what one roll sums, read by ceResolve and the publish; cePublishActions publishes rowGroups (ceStateGrouped) and flatMod/flatAlso; _ceActionsRowsSection draws them in both modes (Full has no Approach select); _ceRowLanding lands the dice under the row in last.approachDefId
- `TRAY-DEFER` -- ceSyncToolbar does not re-register for an arm change while the Actions panel is mounted (_ceActionsMounted, counted in ceActionsRoot), because register() remounts the panel; the release re-syncs; registerEngineUI records what it registered
- `DICE-TRAY` -- die faces (_ceDieC), the throw (_ceDiceTrayC, timers.setTimeout landing, once on a fresh roll, off under reduce motion), ceOddsRibbon (best first), ceOddsLadder, ceOddsLegend, ceBandHue over theme tokens band-1..4, die-kept, die-etch (Dice group in CE_THEME_TOKENS)
- `ATTEMPT-OPTIONAL` -- ATTEMPT-TYPED's "the attempt is required" is DELETED with its composer

### World Pipeline

- `CHARTER` -- the pipeline's INPUT, and the only thing that reaches a prompt as an instruction
- `LADDER` -- scale is AUTHORED, never derived from depth -- mapKind's own argument one layer up
- `LADDER-TOP-ONLY` -- only the top rung is authored on the scope form
- `SCOPE-FORM` -- three fields and a scale, no chat: the one stage where the author already knows the answer and a conversation is a longer way to type it
- `NO-MANIFEST` -- WORLDPIPE 2 -- THE RECORDS ARE THE QUEUE. A manifest row and a stub record hold the same facts, and the one that is not the record loses
- `SCOPE-COUNT-HONEST` -- the count SEEDS ROWS rather than being remembered as a number
- `NAME-CALL` -- PROMPTS 4 -- the name is its OWN call, on its own MACHINE-family head
- `NAME-POOL-WORLD` -- the pool is WORLD-WIDE, not per rung
- `NAME-POOL-KIND` -- and PER KIND: characters from the character index, every other kind from the entity index by type. It read locations for every kind
- `NAME-APPEND-ONLY` -- the pool grows by APPENDING, oldest first, so call n's prompt is call n-1's plus text
- `NAME-CLEAN` -- PROMPTS 4.7 in order, with two corrections found by running it: FENCES COME OFF BEFORE THE LINE IS PICKED (a fenced reply's first line is the fence
- `NAME-ROOT` -- the spec's rule and the spec's example DISAGREE and both are implemented
- `NAME-RETRY` -- the rejected candidate goes back as a REAL assistant turn, so the model sees its own answer rather than being told about it in the third person
- `LADDER-BLOCK` -- PROMPTS 8, locations only
- `EXTRACT-HANDOFF` -- extraction rides the CHAT family's prefix (that is what makes it affordable) while PROMPTS 3.2 puts it in the MACHINE family
- `EXTRACT-RELAPSE` -- a reply that is a question is not an answer, and it is detectable -- a question mark PLUS an address or hortative, both required
- `EXTRACT-REROLL` -- one field, on demand, overwriting
- `SCOPE-ONE-STAGE` -- Scope and Locations are ONE stage, two phases, at every depth: no rung renders the scale form, a rung renders the workspace
- `SCOPE-DEPTH` -- where the author is standing, in tempStorage per WORLDPIPE 7.5 -- session state
- `SCOPE-DOOR` -- ONE DOOR WITH A SCOPE ARGUMENT, BOTH WAYS. A committed row has two visible destinations and they are not the same door
- `LADDER-PER-PLACE` -- the rung below a record is OFFERED, not imposed
- `REC-CHAT` -- ONE CHAT PER RECORD, beside the one per scope, because the two EXTRACTIONS want different scopes
- `REC-CHAT-DERIVED` -- the chat list is built FROM THE ROWS and is not authored
- `REC-CHAT-REKEY` -- a draft's id dies at commit, so the transcript is re-keyed onto the new record id in the commit path itself
- `REC-CHAT-ONE-EXIT` -- a record chat names ONE exit where the scope chat has to name two, so its question list stops being context and becomes the agenda
- `CHAT-KEEP` -- a committed record KEEPS its chat, and the transcript store grows with the cast for the life of the story
- `CHAT-EXPORT` -- a JSON file through api.v1.file.save, the door exportData already uses
- `OPEN-SOLO` -- an accordion is a PREFIX ARGUMENT on ceExpandRow, not a second component. Thirty seed rows open at once is 270 live fields; one at a time is nine
- `SCOPE-CHAT` -- PROMPTS 15 -- the scoped chat has its OWN block and was running on the world profile's
- `SCOPE-CHAT-STABLE` -- no digest of what exists at this scope, against PROMPTS 15's last line
- `SEED-CALL` -- PROMPTS 10 -- one call per RECORD, not per question, because the author judges the lines as a set
- `SEED-ASK-SET` -- LADDER-SCOPE applied, not a new rule: the `any` lenses, the facets at this rung's scope, and every field the author defined
- `SEED-BASELINE` -- a seedless field is not a degraded one. A HAND-BUILT RECORD HAS NO SEEDS AT ALL, so a narrower ask is measured against a baseline that does not exist
- `SEED-ROUTE` -- two sources, one format
- `SEED-KEYS` -- labels are the keys
- `SEED-PARTIAL` -- A MISSING LINE IS A RESULT, correcting PROMPTS 10.5
- `SEED-REROLL` -- one row, on demand, and it CLEARS the asked set before writing -- unlike the batch, which only adds
- `SEED-ONE-FIELD` -- `only` NARROWS ceSeedDefs, so the question block, the extract ask and max_tokens all shrink with it; the write drops the SUMMARY and does NOT blank on a missing line, reversing SEED-REROLL's `blank` for the set of one
- `DIGEST-ANCESTOR` `DIGEST-SIBLING` -- PROMPTS 9. Built ONCE PER BATCH and carried in the base, so they are prefix rather than tail. An ungenerated ancestor contributes NO LINE, not a placeholder: a line saying a thing exists and nothing else is an invitation to invent it at the level the pipeline has decided not to invent at yet
- `KIND-SHAPE` -- a LOCATION's shape is the RUNG's, because a rung is a scale and a scale is a question set
- `SEED-DEFS-CHAR` -- A CHARACTER IS NOT A CATALOG ENTRY AND ITS THREE SHAPES ARE THREE REAL QUESTION SETS -- classic is STATIC_FIELD_DEFS (the sheet), studio is the `kind
- `CHAR-SEED-DIRECT` -- A BUILD-ROUTE CHARACTER COMMITS ITS SEEDS AND THE DUMP PASS IS NOT RUN. The old path derived the sheet from a concept dump with its own extraction call -- one more
- `NAME-KIND` -- THE NAME PASS WAS ASKING FOR PLACES FOR EVERY KIND, in two independent ways
- `NAME-FROM-CHAT` -- the conversation is part of the name pass's BASE, not the per-row ask, which preserves NAME-CALL's stable prefix
- `DESC-ASKED` -- THE DESCRIPTION IS THE FIRST QUESTION, not a slot in the formatting rules
- `KIND-SHAPE-CAST` -- ceEntityHasShape asks the CATALOG and a character has none; Build asks its own question
- `OPEN-CHAT-FIRST` -- the conversation is ABOVE the button that consumes it and is not gated on a draft existing
- `OPEN-DEFAULT-NOT-RULE` -- in medias res is the DEFAULT AND NOT A RULE; length is the author's too [OPEN-BUDGET]
- `OPEN-WRITE` -- THE LAST STAGE AND THE ONLY ONE THAT IS NOT A QUEUE. Every stage above it produces records; this produces ONE ARTIFACT from all of them
- `OPEN-PLACE` -- WRITING AND PLACING ARE TWO ACTS. The text lands in an editable box on the charter and reaches the document only on the second press -- DESTRUCTIVE-NEVER-IN-PLACE applied
- `OPEN-DRAFT` -- the opening lives on the CHARTER: it is the artifact written from the charter, and a charter with an opening in it is a story that has been started
- `BUILD-CHAT-ONE` -- the chat address is resolved ONCE, in cePublishBuild, and stored. A second derivation is not fixed by making the two agree
- `DESC-MEANS` -- THE ALWAYS-ON DESCRIPTION LINE IS NOT A SUMMARY FOR EVERY KIND. Every staged row has a `description`: written by the seed pass's SUMMARY line
- `NAV-TAB-REMEMBERED` -- ONE SLOT PER SURFACE, NOT ONE SLOT QUALIFIED BY SURFACE. The qualified single slot stopped one surface reading another's tab -- the bug NAV-TAB- QUALIFIED was
- `FIELD-MINT` -- WRITING THE QUESTIONS, not answering them -- WORLD-PICK-ADD one level down
- `FIELD-MINT-DOOR` -- the questions group decides what is IN the author's set, not WHICH set is asked; not the second editor SHAPE-ASKS forbids
- `ROW-RETAIN-COUNT` -- the top-up counts UNSTAMPED drafts; the queue and the count must mean the same thing
- `SHAPE-ASKS` -- THE SHAPE PICKS THE QUESTIONS AND THERE IS NO SECOND EDITOR. The profile's own three-way moves onto the SCALE, where a rung is one question set by construction
- `BUILD-COMMIT-KIND` -- the faction commit branch now carries parent, rung, seeds and shape exactly as the location branch does; the four facts a staged row carries into a record -- seeds as field values, shape, rung, parent -- resolved ONCE by _ceCommitFacts
- `PASS-KIND` -- every pass takes a `kind` and defaults it to 'location'. Delete the default once every stage is on
- `BUILD-BANDS` -- FIVE BANDS, ONE ORDER, EVERY STAGE: where you are, talk, set up, the work, what exists
- `BUILD-BANDS-SETUP` -- set-up is ABOVE the work and collapses once answered; a thing that decides what a row is asked cannot sit under the row
- `BUILD-BANDS-TALK` -- talk is second, above set-up, on all ten stages, so the order learned on one is right on the next
- `BUILD-STEPS` -- ceStepTrack DRAWS THE PROGRESSION. add -> name -> seed -> commit is four acts and the only signal was a button label changing IN PLACE
- `CHAT-PANEL` -- the dock HAD NO EDGES -- it paints its own ground and grows to 46vh inline with no rule above or below, and closed
- `BUILD-COPY` -- every stage states WHAT IT PRODUCES and where that goes, via ceStagePreamble's three REQUIRED parts -- which is the only durable answer to a surface whose whole
- `BUILD-CHROME` -- _ceBuildScope is ONE renderer for every kind
- `BUILD-CHROME-READS` -- the renderer was kind-clean and THE DATA READS WERE NOT. The draft queue, the committed index, the commit call and the shape picker all named 'location'
- `BUILD-COMMIT-SCOPE` -- Commit writes the rows ON SCREEN: _ceBuildScope collects its non-queued row ids and commitStagedDrafts takes them. It committed every draft of the kind
- `BUILD-SCOPE-HOIST` -- `kdef` is declared ABOVE the loops that read it -- `var` hoists the declaration and not the value
- `KIND-SCOPE` -- THE SCALE VOCABULARY BELONGS TO THE KIND, and which kinds have one is MEASURED off the facet tables rather than declared declaring a vocabulary before the stage that reads it is a parked field
- `KIND-SCOPE-FACETS` -- a scope is valid for a kind when its scope table OR its catalog's base facets use it; the table alone turned a species list's own scope into 'any'
- `KIND-NOUN` -- THE ROUTE'S WORD FOR A RECORD IS READ FROM CE_ENTITY_CATALOGS; the SEED pass had the location vocabulary NAME-KIND already fixed in the name pass: `noun` fell to 'Place' for every ladderless kind
- `NAV-TAB-QUALIFIED` -- ceNav writes a QUALIFIED 'surface:id' tab, the shape ceTabGet reads
- `STAGE-COUNT` -- the stage picker numbered by INDEX into CE_BUILD_STAGES and sized by its length, both of which count `built: false` entries
- `PROFILE-RETURN` -- _ceEntityRoot returned ceScreen(null, body) at all three tails, so a profile opened FROM the Build route rendered no way back to it
- `RUNG-PLURAL` -- a rung's label is the author's and is usually ALREADY PLURAL (Universes, Galaxies), so appending 's' printed "universess" in four places. _cePlural
- `ROW-VALUE-SHORT` -- ceRow's middle slot is a narrow column. A value that is a sentence goes on its own ceSub line beneath, or it renders one character per line
- `ROW-RETAIN` -- a committed LOCATION row is STAMPED (CE_DRAFT_DONE_KEY) rather than deleted
- `DONE-PARENT` -- band 4's parent test is a RECURSIVE-KIND question. `atId` is '' on a flat kind but its RECORDS still have parents, so the test read "committed and standing nowhere" and every placed character fell out of Cast. The band is a world list, not a commit receipt, and gets a FILTER-KEEP filter past CE_PICK_SEARCH_MIN
- `SEED-IS-VALUE` -- A SEED IS THE FIELD'S FIRST VALUE. Commit writes customFieldValues
- `SEED-DURABLE` -- EntityRecord.fieldSeeds now has NO WRITER. ceEntityOrderedDefs still reads it and old records still carry it; EntityRecord.fieldSeeds, keyed by the SAME facet id as customFieldValues
- `SEED-NOT-WIZHINT` -- a seed is a property of the RECORD and survives a reload; a wizard hint described one press
- `SCOPE-SEL-STORE` -- the scale picker is store-backed, not ceFieldLive-backed, and that is a property of ceSelect: it does not register in CE_FIELD_ELS
- `SLOT-OPTIONS` -- the ONE field generator
- `STEER-RANK` -- the Steer box is a SYSTEM instruction, placed LAST and stating that it outranks the field instructions
- `VOICE-SPLIT` -- the Voice tier is TWO artifacts: its bracketed tag line leads MEMORY (prepended in commitWizardMemory
- `CHARTER-AN` -- the Voice tier IS the Author's Note, per WORLDPIPE 3.1, and ceCommitAuthorNote is the ONE site that writes the managed region
- `WIZUI-GUIDE` -- WIZUI 3.2 -- no permanent paragraph of instruction on a pipeline surface
- `WIZUI-PRIMARY` -- WIZUI 3.3 -- one accented control per surface
- `CHARTER-TIER-NAMES` -- the tiers READ as Rules and Voice and are STORED as `style` and `play`. Rules is stamped on every generation; Voice reaches the Author's Note and no generator
- `CHARTER-COMPRESS` -- two calls, one per tier, appended to the premise chat's EXACT prefix
- `CHARTER-CANON-NONE` -- there is no third tier. canon IS the world profile's answers, projected; a compression call for it would be a second writer of one artifact
- `P-SUBSTRATE` -- the cached head, ordered by VOLATILITY and never by topic
- `P-STYLE-ABOVE-NAMING` -- PROMPTS 22.1 closed: style tier ABOVE. The volatility case for the other order pays nothing because a session is one story
- `P-NO-SETTING` -- no block in the substrate contains a noun belonging to any setting

### Chat in a Menu

- `CHAT-DOCK` -- one component, two heights, composer present at BOTH. Closed is a lead line plus the box; open is the thread
- `CHAT-REVERSE` -- NOTHING CAN SCROLL A CONTAINER HERE (see SCROLL-ANCHOR), so the scroller is column-reverse and turns are newest-FIRST in the DOM. Reverse the array
- `CHAT-HEAD-SLOT` -- the dock owns no header. The wizard passes a spine or a trail, a character passes a person, and a dock that owned one would force one to be wrong
- `CHAT-SEND-LIVE` -- Send is a CLICK and arrives before the blur that would commit the box
- `BUILD-CHAT` -- one transcript per scope, addressed by scope id, one storyStorage record for all of them
- `BUILD-CHAT-NEW-PATH` -- WIZLIVE's prompt builder is retired and must not be recreated
- `BUILD-CHAT-FAILKIND` -- a failed turn is written INTO the transcript with its reason
- `CHAT-DOTS` -- the waiting bubble
- `BUILD-WORLD` -- the world profile's questions ARE cfg.wizardSections -- already the question set, already editable, already what assembleWizardMemory projects into Memory
- `WORLD-PICK` -- WHICH QUESTIONS A STORY ANSWERS IS `enabled`, a field that has gated assembleWizardMemory since WIZARD-2
- `WORLD-PICK-ADD` -- the pick also MINTS questions, capped by CE_WORLD_PICK_ADD_MAX, and the surface says so
- `WORLD-EXTRACT` -- the answers, from the WORLD chat: blanks only, switched-on only, one call per question; "Write the blanks" sits BELOW band 2 rather than inside it: band 2 collapses once any question is asked, which is when this button starts mattering
- `WORLD-HELPER` -- two audiences, two fields
- `BUILD-CHAT-EDIT` -- a bubble is tappable and both roles are editable, because the transcript IS the prompt -- a bad reply left in it steers every later call
- `CHAT-THEME` -- the dock's own token group, and now the ONLY one: the cb-* family it was separated from painted NAI's editor and is deleted with that surface
- `EMPTY-LEDE` -- where a surface is the ONLY way to create the thing it is empty of, its empty state is a LEDE ABOVE the controls
- `BUILD-KINDS` -- a stage is a KIND plus three facts: recursive, ladder, lists. Species divides into two lists, which is not depth
- `KIND-LIST` -- A FLAT KIND THAT STILL DIVIDES, and `lists` is now the TABLE rather than the string 'species' that nothing read
- `KIND-LIST-FALLBACK` -- a draft carrying no list lands on the FIRST list, ceSpeciesList's own additive rule
- `KIND-LIST-ADDR` -- a list kind is addressed by LIST in every pass: its chat (_ceScopeChatAddr), the set it is asked (_ceKindAskScope), the drafts a pass reads (_ceDraftOnList)
- `KIND-SHAPE-WRITE` -- ceScopeShapeWrite branches on the RUNG, not the kind, because that is what ceKindShape's read does
- `KIND-LADDER` -- A LADDER PER RECURSIVE KIND, and FACTIONS HAVE ONE. Recursion and a ladder are still separate facts -- parent context comes from the ancestor digest
- `SCOPE-PER-KIND` -- one scope pointer per recursive kind, keyed off STORAGE_BUILD_SCOPE with a suffix
- `BUILD-ONE-ROUTE` -- the pipeline is ONE route with its own internal stages, not one route per stage
- `BUILD-UI-SUB` -- the Build root subscribes to ceUiStore like every other route root

### Lorebook Projection

- `LORE-PROJECT-LEAK` -- projection-only fields must not reach a saved record

### Relationships

- `REL-PAIR` -- ONE RECORD PER PAIR, addressed by the unordered pair
- `REL-INJECT` -- the pair speaks in three places, each carrying a different thing
- `REL-WANT` -- what each side wants, keyed by character id; the pressure tier aims at it
- `REL-DOOR` -- Relationships is a drill, not an accordion
- `REL-TAB` -- Profile and Relationships are tabs, not a door
- `SHAPE-CUSTOM` -- a third uiShape: only fields the author defined
- `SHAPE-PICK` -- three values is where two-buttons-beat-a-dropdown turns over

### Custom Fields

- `ENT-CF-EVERY` -- a field the author defined is not a shape's property
- `ENT-CF-SEED` -- an empty instruction is a field with no Generate button
- `ENT-CF-EDIT` -- the manage drill is an editor; one write verb
- `ENT-CF-DOOR` -- define and remove are one door, on the record
- `CARD-HUE` -- the left border is PRESSURE, not pattern
- `REL-CARD` -- the card interior is a read view, not a form; REL-CARD-OLD is the superseded form-shaped one
- `REL-MIRROR` -- only the open profile republishes; the store is single-slot
- `REL-AVATAR` -- the image anchor takes the RESOLVED protagonist id
- `REL-GEN` -- all four pair fields generate on a fifth slotOpts scope
- `ATT-TIER` -- _ceDramaAttention reads every pairing, want or no want
- `CARD-MEDIA` -- the picture fills the left end and has no frame
- `CARD-BODY` -- ceRecordCard's body renders INSIDE the card
- `SEG-BAR` -- N short doors in one enclosure; height explicit, cells do not shrink
- `CARD-EXPAND` -- ceExpandCard, the fourth collapsible, against KIT-ELSEWHERE
- `REL-WANT-RETIRED` -- ce_fx_pos_want's def is deleted; the prose moves to a custom field, v10
- `REL-TIER` -- the non-protagonist side pays
- `REL-WRITE` -- ceRelWrite is the ONLY site that writes a pair record; applyCharFieldValue refuses 'rel.*' out loud
- `HOOK-ONE` -- one hook per character, never per pair, and it renders ONCE at the top of the Relationships tab

### Factions, Standing, Diplomacy

- `FAC-RECORD` -- a faction is an EntityRecord; the id is preserved
- `FAC-SURFACE` -- the faction screen is the entity surface; CE_FACTION_TABS
- `FAC-ADDRESS` -- a faction is an address on BOTH sides of a move
- `LADDER-WORLD` -- the standing ladder is the world's unless a faction overrides
- `STANDING-MANAGED` -- ceSyncStandingDefs; managed defs are engine-owned and read-only
- `DIPLO-ROUTE` -- Diplomacy left Settings, and is no longer a route either: see FACTIONS-TAB
- `FACTIONS-TAB` -- World > Factions is _ceDiploRoot with World's strip passed in as props.tabRow; the 'diplomacy' id resolves there through CE_NAV_ALIAS
- `STANDING-ROSTER` -- the roster is derived from standing and never stored

### Entities

- `ITEM-CAT` -- a record type is a catalog row, not a surface
- `SPEC-RECORD` -- a species is an EntityRecord, FAC-RECORD one type over
- `SPEC-LIST` -- which list, as a VALUE on the record, not a second type
- `SPEC-LORE` -- two more composed entries, not one with two headings
- `SPEC-BODY` -- prose in lorebookText, the one-line read in description
- `CARD-ONE` -- one card for a record, ceRecordCard
- `SPEC-CTX` -- the two species entries are configured where the species are
- `CAST-TAB` -- SPEC-CTX applied to the roster: Dramatis Personae is Cast > People (it was World > Cast, and before that Settings > Context), moved and not mirrored. Exclusion is a toggle on each character's own card; the projection rides cePublishMap's existing character-index read
- `ENTRY-TOKENS` -- an always-on entry's preview reports what it COSTS EVERY GENERATION, not how long the string is. Memoised on the exact text; the model is read only on a miss, so a model switch leaves the three numbers briefly reading for the old one
- `ENTS-MULTI` -- World > Entities select mode, GAL-MULTI's shape: Move goes through entityParent's single-record path per id; Delete offers shallow (contents to the top) or deep (places and items inside go too, people and factions never)
- `BODY-NAME` -- saveCharacter writes the entity BODY's name when it differs. Before this the body kept the name it was minted with forever, so the Entities list showed stale names for characters (locations were fine -- they have no second copy)
- `FAC-MEMBER` -- CharacterRecord.factionId, an ID reference, mirrored on CharacterMeta. It is BELONGING; ceCharFactionId is still "who do they act for" and stays derived from standing. Gives the faction Roster real Members and the Cast menu a faction axis
- `CAST-MINOR` -- a person who is ONLY a roster line: a row on CastLoreState, not a record and not an entity. buildCastLoreText needs zero changes because a minor IS one of its rows. `where` is an ENTITY ID so castTier can filter it. Promote ships with it; the view filter is a lens and must never reach the entry (castExclude is the one door for that)
- `CAST-ORG` -- grouping the Cast menu by location or species, THE MENU ONLY -- the composer is untouched and the preview's heading is what makes the divergence honest. Axis and per-axis category order are cfg fields beside recordOrder, NOT CastLoreState, because a view preference must not raise a lastCastText rewrite. Faction is not an axis: there is no membership field, only a standing (see the site)
- `SUMMON-EFF` -- the chip renders the EFFECTIVE answer, not the record's field
- `IMG-TAG-SHARED` -- a slot's tag is story vocabulary, one copy, merged at load
- `SPEC-SHAPE` -- the species image drill has a shape select; imgWidth/Height are read
- `SPEC-IMG` -- a species uses the character image architecture, not the location's
- `SPEC-REAP` -- the one image reap that asks the type first (ENT-ID1)
- `ITEM-HOLD` -- an item's live state is parentId + isEquipped; aeSetEquip is the verb
- `PROFILE-DELETE` -- delete lives at the bottom of the profile and takes the entry
- `NARR-LENS` -- a thread is an EntityRecord with a catalog; labels are entry prefixes
- `NARR-KIND` -- the kind owns one steer line per lens and stores no answer
- `NARR-COLUMN` -- the profile-column gate is the CATALOG, not `shape`
- `MS-GEN` -- milestone generation is a third scope on the one slot-options strip
- `MS-TAB` -- a thread's milestones are a tab; no concept dump
- `TAB-ENTS` -- every entity in one indented list under World; search FLATTENS
- `ENTS-CHIPS` -- the TYPE filter REPROJECTS the tree, it does not flatten it -- filter to one type and every ancestor of every hit is also a hit, so depth is recomputed against what survived. Chips are built FROM the list, never from CE_ENTITY_TYPES (no faction) or the catalogs (no character)
- `REC-DOOR` -- a record's page is its OWN, and a character's is the profile: its body has no catalog, so the entity route opens a page that asks nothing. ceNavRecord is the one derivation; a list that knows its single type still calls ceNav
- `WIDE-ASK` -- the worker cannot see the page: no window, no matchMedia, no `style` element for a media query. Width arrives on EVT_VIEWPORT from the bridge or not at all, and _ceViewW starts at 0 so SILENCE IS THE PHONE LAYOUT. ceWide() is the only reader; the module var is the fact and ceUiPatch is used as a bare repaint bus
- `FILTER-KEEP` -- a search draft or chip selection lives at an ADDRESS on ceUiStore.filters, ceTabGet/ceTabSet's shape for the same store and surviving a nav for the same reason. useState dies with the component and every row on these lists navigates away, so the query was lost on the one action the list exists for
- `MILESTONE` -- the current milestone is the thread's live state, its own key
- `JRNL-STAMP` -- bubbles carry storyT, stamped at the write and formatted in the publish; an absent stamp self-suppresses
- `JRNL-SCAN` -- the journal writes its own entry off the yoink: one event, not a period, and the trailing bracket is trimmed at this caller only
- `YOINK-VOICE` -- voice:'prose' swaps the prefill's refusal block for one that refuses continuation without refusing prose
- `TAB-STORY` -- one surface, several subtabs; the route id stays 'journal', and it is also the tab scope
- `STORY-CAL` -- Story > Calendar is the old World > Time body (_ceMapTimeTab) inside _ceStoryCalendar, which subscribes to and publishes the map store itself; the calendar's DEFINITION is Rules > Time
- `LORE-EVERY` -- a field commit creates the entry it cannot find
- `LOC-PROFILE3` -- the anchored image frame
- `EQUIP-DESC-NOT-NAME` -- a holder's entry folds the item's description
- `CONN-SYM` -- ONE EDGE, READ FROM BOTH ENDS. Stored on whichever record authored it and found by the far end off EntityMeta.connections; every row carries the owner, so either surface edits the one array. Characters are not offered
- `CONN-TAB` -- every type but a character has a Connections tab, grouped by the far side's kind; ceEntityTabsFor is the one resolve. It also holds where the record is (_ceEntityLinksTab): parent, a place's travel tier (folded), contents, connections, a place's map block (folded)
- `SCENE-BROADCAST` -- SceneStatePayload carries only what is read. locationGraph, presentItems, defaultBgUrl, factionRelationships and EntityConnection.oneWay deleted together, and the whole-index read that fed them went with them
- `STAMP-CUT` -- Milestone.eventArmedAt, MilestoneEvent.startedStoryT and Milestone.stateLine removed -- three stamps written and never read; the conclude path lost a loadConfig and a derive with them
- `CC-TAIL-GONE` -- six CharChatMode fields have no reader and buildCharChatInstruction does not exist. KEPT ON PURPOSE as content, like the wizard generators; not a bug to fix silently and not to be rediscovered by accident. maxTokens is a SEVENTH and is NOT in that six. It is WIRED now -- see CC-BUDGET
- `CC-MODE-THREAD` -- the reply path takes the THREAD's mode as a parameter, and the stamp writes only when the thread has none. The ambient _ccMode()/_ceCcModeSeed pair is DELETED -- it answered a question no live turn was asking
- `CC-ASTERISK` -- Chat Roleplay is bare speech plus *actions*; _ceCcInline renders the pairs as italic on EVERY message, ungated, because a message carries no mode
- `CC-BUDGET` -- the mode table's maxTokens can only RAISE CE_CC_REPLY_FLOOR, never cut below it -- two of those numbers are lower than what had been shipping
- `GEN-TEXT` -- ONE unwrap for a router reply. Five copies existed and disagreed about whether .message.content or .text came first; both are correct for one of the two shapes the router returns, so each copy silently read '' from the other one
- `BUILD-SHIPPED` -- the eight wizard generators are deleted; Build shipped, so the one reason they were kept expired. Two carried reprieves naming stageEntityNamed, which does not exist
- `PROBE-RESIDUE-47` -- an instrument's LEFTOVERS go with it: the log-channel storage round trip (a stored setting with no writer), _ceSBLastAct (written twice, read by a reader that is gone), and ceStoryBlockReset (three callers, all console commands)
- `DEADSWEEP-46` -- the zero-reference scan now returns EMPTY. /log's two verbs, /ce's two probes and the wizard kind table are gone with their cascades, and the capability-without-a-door list is down to the two entries that are real
- `CLEANUP-44` -- the [DEAD] list was itself stale -- twelve of its names had already been deleted. Rewritten to what is actually there, with the two it named that turned out to be LIVE recorded so they are not nearly-deleted again. CROSS-ARTIFACT: bridge 3.0.18 deletes the orphaned CE_VN_CSS and repairs its own index entry, which described six pieces of machinery none of which existed
- `CC-STAGE` -- a FOURTH avatar mode, not a subsystem. Background is the camera location at slot Avatar, figures are emotion slots, both plain ceImgAnchor with collapse=1 -- no new image store and no bridge change. Percentages live on CE_CC_AV; the per-character size is CharacterRecord.ccStageScale, NOT GlobalConfig.stageScale (that is Scene's stage, 29). The bridge's orphaned CE_VN_CSS is NOT revived: it targets NAI's ProseMirror editor and this stage is CE's own dock
- `CC-STAGE-Z` -- every layer states its own z. An anchor left at auto LIFTS its picture to 1 (the painter's .ce-surf-img rule), it does not sink it: 1 place, 2 scrim, 3 figures, 4 overlay, 5 the toggles
- `CC-STAGE-SLOT` -- the figure is CE_IMG_SLOT_STANDEE, the same slot Scene's stage reads -- NOT the emotion slot, which collapses to nothing for any character without per-emotion full-body art. Emotion-preferred needs a bridge-side alt= fallback
- `CC-BAR-SCROLL` -- the disclosed bar body is a 60dvh scroller. It had no ceiling, so its content pushed the thread and composer off the viewport with nothing scrollable
- `CC-STAGE-FILL` -- the stage FILLS the band and the background is cover; it is not shaped by the room's aspect. stageH is its ceiling inside the band, 100 = fill
- `CC-STAGE-SHOT` -- a photo on the newest turn replaces the room as the background, addressed CE_IMG_GAL + uuid-in-slot the same way _ceCcPhoto addresses it
- `ARCH-V45` -- ONE division across all three architect paths: char_captions carry appearance, location records carry the setting, equipped items carry gear -- the BASE caption writes framing, action, position and expression and restates none of it. No coordinates (use_coords is false), no weights (a hallucinated 10::x:: fries the render), no rating unless the scene earns one, and act tags with it when it does
- `ARCH-CTX-DOOR` -- Auto-Snap's scan depth had a stored setting and no control since the architect existed; it is a clamped 1-20 field on the Presets tab now
- `ARCH-PROMPT-DOOR` -- architectPrompt is ARCH-CTX-DOOR's twin, one field over: it has no editor and no reset, DEFAULT_GLOBAL_SETTINGS seeded a COPY of DEFAULT_ARCH, and saveImageSettings persists the whole object -- so the first save of any unrelated image setting froze that copy into account storage and every later revision of DEFAULT_ARCH became dead code for that account. The field is OPTIONAL now, nothing seeds it, and loadImageSettings CLEARS a stored value byte-identical to any default this script has shipped. REVISING DEFAULT_ARCH MEANS APPENDING ITS OLD TEXT TO CE_ARCH_DEFAULTS_PRIOR IN THE SAME PATCH or the freeze returns silently
- `ARCH-FRAME` -- one instant, third person, no before or after, camera-visible only, no mood summary, names in the prose and never in the tag block. IN THE USER TURN, not in DEFAULT_ARCH, because the user turn is the only half a frozen config cannot override. Story and chat-snap paths only -- a described selfie is already one moment
- `ARCH-SAMPLING` -- the architect was the ONE generation family here passing no temperature and no enable_thinking. Both now, at both call sites, and the output goes through ceStripThink AT THE CALL SITE -- not inside _ceGenText, which the diagnostics recorder shares and whose contract is to store the raw string
- `CC-STAGE-THOUGHT` -- tapping the overlaid line reveals that turn's thought, the same gesture the bubbles use. Every mode writes one -- _ceChatTurn's call 1, a separate generation from the reply -- and the stage was the surface that hid it. ChatMessage.thought is an OBJECT; it goes through _ceComposeThoughtLine
- `CC-STAGE-FIGW` -- figures are ABSOLUTE against opposite edges with boxes wider than any standee needs, so the boxes overlap and the pictures do not. A shared flex row made each figure's width the binding axis and figLane/ccStageScale inert
- `CC-STAGE-BAND` -- Show chat replaces the stage outright rather than shrinking it. The two toggles are built by _ceCcStageCtl and mount in both states, or the button would remove the only way to press it again
- `CC-STAGE-DIALOGUE` -- the overlay is a gradient with 10% gutters, not a slab with a hard edge across the picture. msgDim steers the floor of the gradient

### Clock and Schedules

- `CLOCK-NOT-STATE` -- the clock is not a StateDef -- a time band wraps midnight
- `CLOCK-HISTORY` -- it lives in historyStorage because it moves every turn and rewinds
- `CLOCK-BAND-ONLY` -- the model sees the band and nothing else
- `SCENEBLOCK` -- the AN scene header is ONE part (time line + place line) and the present block is a PARAGRAPH; no "Present:" label
- `SCHED-PIN` -- the pin: one plan forced on, checked before the rules
- `ATMO` -- a location's schedule IS its atmosphere
- `CE_SCHED_MODES` -- two owners, one editor; the table owns every string that differs 30

### Chat

- `CHARCHAT-CUT` -- The in-story chat is gone, engine and bridge together; the window [CHARCHAT-SURFACE] replaces it. The substrate (CC_MODES, the cleaners, the emotion parser) survived.
- `CC_MODES` -- four kinds of conversation; NOTHING ELSE MAY FORK ON MODE
- `CHARCHAT-CTX` -- saved threads have a context door: two entries, never one
- `CHARCHAT-EMO-SLOT` -- the parser answers WAS A TAG FOUND, _ccEmotionSlot answers WHAT DO I PAINT. A mode that asks for an emotion always yields one and defaults to 'neutral'
- `UTIL-PIN` -- THE UTILITY CHANNEL STATES ITS MODEL. ceUtilityModel() is the one read and CE_UTILITY_MODEL the one string
- `P-PERSONA` -- the third head family, and the only one that REPLACES CE_P_CORE instead of sitting under it. Still one assembler: a `family` value, never a second builder
- `CHAT-PARTICIPANT` -- who the contact is, assembled from five EXISTING builders and placed BELOW the shared prefix, so a chat switch invalidates it and nothing above it
- `CHAT-HEADERS` -- CAPITALS FOR INSTRUCTIONS, SENTENCE CASE FOR MATERIAL. A shouted heading is a style instruction whether or not it was meant as one
- `REL-ONE-SOURCE` -- the participant block had TWO relationship projections firing and printed the same standing twice
- `CHAT-THREAD` -- a message is a RECORD and its rendering is a VIEW. storyStorage, CE prefix STORAGE_CHAT_THREAD_PFX
- `CHAT-TURNS` -- block 7, the transcript as REAL messages rather than prose in one user turn
- `CHAT-SEND` -- one turn, TWO CALLS sharing blocks 1-7 byte for byte and differing only after them, which is what makes the second nearly free
- `CHAT-TAIL-NOTADAPTIVE` -- block 5b's budget is a CONSTANT on purpose
- `CE-BUBBLE` -- the bubble SHELL, shared by both docks so they cannot disagree about what a message looks like. Geometry only; contents differ entirely
- `CHARCHAT-ROUTE` -- the window is a SURFACE ('ccchat' + entityId), not a profile drill
- `CHARCHAT-SURFACE` -- the character chat window
- `CHARCHAT-PRESS-LABEL` -- SEND WITH AN EMPTY BOX IS THE PRESS. The second verb is deleted, not renamed: ceChatPress already read the TRANSCRIPT rather than the button
- `CHARCHAT-BODY-PURE` -- a stored ChatMessage.text is the BARE BODY -- no name header, no Emotion line
- `CHARCHAT-CLEAN-ORDER` -- normalise, cut a TRAILING header, then the emotion lines, then a trailing header again
- `CHARCHAT-TRAIL-HEADER` -- _charchatStripHeader is ^-anchored and always was
- `CHARCHAT-STOP-EITHER` -- a stop string that FIRES and one that VANISHES are not the same event, and which one this is has not been measured
- `CHARCHAT-EMO-TWO-RX` -- two builders, two jobs
- `CHARCHAT-EMO-TRAILSPACE` -- the trailing cutter ended [ \t]*$ with no /m, so a reply ending in a blank line did not match and the tag reached the bubble as message text
- `CHARCHAT-EMO-LAST-WINS` -- a reply may carry more than one tag -- the model imitating both the two-space replay form and the bare one. Take the LAST, remove ALL
- `CHARCHAT-FRAME` -- the chat surface is NOT ceScreen
- `CHARCHAT-FRAME-EDGE` -- the surface draws its own hairline, and that is what makes the HOST's padding read as a margin instead of as slack
- `CHARCHAT-FRAME-FLOOR` -- the modal's content box gives height:100% nothing to resolve against -- measured, twice
- `CHARCHAT-BAR` -- ONE 44px ROW IS ALL THE CHROME. It names the contact and hides the way back, the avatar controls and nothing else behind a disclosure
- `CHARCHAT-COMPOSER` -- the box and Send are ONE pill: the field goes bare [FIELD-BARE] and the row owns ground, border and radius, because two borders 4px apart said they were two controls
- `CHAT-RUN` -- consecutive turns from one speaker are one utterance in pieces
- `CHARCHAT-AVATAR` -- three modes -- beside / in-bubble / one window face -- account-level like CE_REDUCE_MOTION
- `CHARCHAT-TAP-NEST` -- an open bubble stops being tappable
- `CHARCHAT-EDIT` -- edit and delete are store ops, not turns: no generation, addressed by message ID because the render window pages independently of the stored array
- `CHAT-TURN-CORE` -- send / press / regenerate are one runner and three thin doors. They agree on load, assemble, think, reply, parse, persist and differ in about six lines each
- `CHAT-PRESS` -- send with nothing to send
- `CHAT-REGEN-THOUGHT` -- regenerate REUSES the discarded message's thought rather than thinking again: the POV message it read has not changed
- `CHAT-TURN-WINDOW` -- how many turns reach the PROMPT, which is not how many the view draws
- `CHAT-ATTACH-INLINE` -- the photo generates as part of the turn, not staged, so a bad prompt costs a real generation -- which is what the head's attachment clause earns
- `CHAT-SNAP` -- Auto-Snap for a chat: the THIRD architect path, illustrating the exchange rather than composing a photo somebody sent. Lands on the NEWEST message, which is the whole of its stage-mode behaviour -- CC-STAGE-SHOT already reads that attachment for the backdrop, so there is no branch on stage mode and there must not be one. Writes an id and NO attachmentPrompt: that field is a description somebody sent, projected back into the transcript by ceThreadTurnMessages. Refuses a newest message that already carries a photo rather than overwriting it
- `CHAT-SNAP-CAST` -- the cast is resolved BY ID -- contact from the thread's address, POV from its owner -- and nothing is name-detected. The POV joins only when it is a real character record, cePublishCcThread's own membership test
- `CHAT-SNAP-DEPTH` -- how many MESSAGES the snap reads. cfg.charChatSnapCtx, default 2, clamped 1-CE_CC_SNAP_MAX by _ceCcSnapCtxN; CE_CC_SNAP_CTX is the values worth offering and is NOT the legal range. A config key, not a store field, unlike sumRange: a range is picked per invocation, a scan depth is a standing preference
- `CHAT-ATTACH-ADDR` -- dispatchCharChatImage takes contactId/povId/kind as a PARAMETER. The legacy path was a live session on a module var
- `CHAT-ATTACH-SET` -- attachmentId and attachmentPrompt move together, through one op. Half a clear is either a permanent empty frame or a picture nothing can regenerate
- `CHAT-ATTACH-OPS` -- the photo's verbs ARE the gallery's -- ceGalleryAction download/delete and ceImgEditOpen -- in their own labelled row
- `CHAT-PREFIX` -- blocks 1-5 in one assembler. Nothing in it singles out the SPEAKER; the cast list naming everyone is fine because it is the same list whichever chat is open
- `CHAT-CAST` -- block 4, the Dramatis Personae WHOLE, through buildCastLoreTexts' cast half so this channel cannot disagree with the story about who the cast is
- `CHARCHAT-SUM-ONE` -- ONE PROMPT, TWO FEEDERS, AND THE WINDOW IS ONE OF THEM. Built
- `CHARCHAT-SUM-RANGE` -- first N or last N, COUNTED IN MESSAGES, as a slice() on the stored array; 'all' carries neither field
- `CHAT-ATTACH-BARE` -- A PHOTO WITH NO WORDS IS A REAL TURN. ceThreadTurnMessages skipped any message with empty text -- a rule that predates the tag becoming a FIELD
- `CHAT-ATTACH-ASPECT` -- the record stores height/width AS GENERATED, read off the settings the dispatch used
- `BUBBLE-MEDIA` -- a percentage child inside a shrink-to-fit bubble resolves against the TEXT. One cause, two reports: a captioned photo drew at the caption's width
- `CHAT-FORCE-PHOTO` -- forcing a photo is a PREFILL, not an instruction: the tail extends from 'Kara:' to 'Kara
- `CHARCHAT-AV-RATIO` -- the face box may be PORTRAIT. Every box was width===height and the painter's default fit is cover, so a portrait generation lost its top and bottom to a centre crop
- `CHARCHAT-AV-BESIDE` -- the window face shares a ROW with the thread, so the width beside it carries messages
- `CHARCHAT-EMO-DETAIL` -- the emotion reads on the MESSAGE, revealed with the thought, not as a standing label beside the window face
- `MAP-CAM-SPLIT` -- the LIVE camera is its own store on both maps and the canvas component is its only subscriber; ceMapStore.camera / ceHexStore.camera hold the SETTLED value
- `MAP-RENDER-PROBE` -- ~ DELETED. It answered "per-component", that answer is load-bearing in MAP- CAM-SPLIT and the hex camera store
- `CHARCHAT-POV-OWN` -- the window keys its threads off ceChatSavedPov(cfg, contactId) [POV-REMEMBERED]
- `CHAT-STORY-JRNL` -- block 5 is the JOURNAL: compressed, curated, and the artifact a chat summary writes into -- so summarising a chat feeds the next one with no second store
- `CHAT-SCENE` -- block 5b is the LIVE STORY TAIL, and the journal does NOT replace it
- `CHAT-ASK-EMPTY` -- anything constant across a thread's turns belongs above them
- `CHAT-THINK` -- the thought moves BACK in front of the reply
- `CHAT-THINK-NONAME` -- the rubric is second person and byte-identical for every character. The old one interpolated a name into 13 of 15 lines, so nothing above it could cache
- `CHAT-REPLY-TAIL` -- the reply has NO ask: a prefill assistant turn plus `stop`. Stop is the HEADER form ('\nBen:'), never the bare name
- `CHAT-PARTICIPANT-NOLINE` -- there is no compact persona line and CE-SOCIAL 7.2 is DELETED. The register clause was already compact (a compile was read as a cost)

### Hooks

- `HOOK-LIFE` `HOOK-BAND` `HOOK-TIER` -- one record on a 1-4 ladder, 0 means gone; three injection bands, no gap
- `HOOK-GATE` -- present / absent / unknown, and unknown is asked anyway
- `HOOK-PROMPT` `HOOK-TAIL` -- built on the ephemeral prompt; the tail is ordered

### Travel and the Map

- `TRAVEL-TIER` -- which END prices a hop, returned as an id; an interior hop is not travel
- `MAP-SELF` -- a parent is packed among its own children as one more circle
- `MAP-OUTLINE` -- depth 1 is always named
- `MAP-SCALE` -- sibling radii are compressed by a power under 1 BEFORE packing
- `HEX-COLORS` -- a cell's pt is an index into the shell's palette; the map owns no table
- `HEX-LOCCOLOR` -- authored if ent.mapColor says so, derived otherwise
- `MAP-INLINE` -- the three drawing fields are ONE renderer with two hosts: a place's Connections tab (fold:entmap) and the map place editor
- `MAP-MODE` -- both map tabs have View and Edit (ceMapEditing, ceFilterGet 'map:mode', View default); creating, place editing, painting and the grid are Edit only; leaving Edit discards an unapplied auto-fill preview
- `MAP-EDIT` -- _ceMapPlaceEditC edits the selected place on either map (name, Inside picker, map block folded); it publishes the entity store for the picker, and the parent picker redraws both maps when ctx.redraw
- `HEX-TOOLS` -- one tool control in Edit (Select, Paint places, Paint colour) replaces Panning/Painting and the Brush select; brush rows show only while painting; Size, Auto-fill and Start over fold under The grid
- `HEX-CAMERA` -- the camera's cell is pinned on the map record (camHex)
- `TRAVEL-MODE` -- one config value decides which map prices; the other stops quoting
- `HEX-VH` -- a vehicle is its own layer on the cell (`vh`), and ceHexOf is the ONE resolver for both layers; arriving on its cell BOARDS it
- `MAP-VEHICLE` -- a mapKind that moves: the hull travels, the camera does not
- `MAP-VEHICLE-HEX` -- a hull occupies exactly one hex; painting MOVES it, the cell decides its parent, and unpainted ground roots it
- `MAP-KIND` -- a mapKind that costs nothing: an interior hop is not travel
- `HEX-ICON-ANCHOR` -- a region's mark sits on a cell and fills one
- `HEX-FIT` -- the container width is UNMEASURABLE, so it is assumed narrow and then learned upward from offsetX; the zoom floor is derived from the radius, not constant
- `HEX-LABEL` -- a mark's size is a screen-px floor against a share-of-a-cell ceiling, larger wins; label and icon counts are capped and the cap spends priority
- `HEX-LOD` -- CELL SIZE ON SCREEN is the detail axis, never k: under the floor names collapse to level 1, over the ceiling the level below is named too
- `HEX-DECLUTTER` -- marks are collected, ordered by region size and PLACED against boxes already taken, in screen pixels; an unplaceable name is dropped, not drawn
- `HEX-BRUSH-IN` -- a level is a flat cut across the world, so the place list is filtered and grouped BY THE PARENT, and a selected cell can set the whole brush
- `HEX-GESTURE` -- the heavy half of an inline panel is dropped while a gesture runs
- `HEX-NODECOUNT` -- SVG node count is the axis; consolidate into path subpaths
- `HEX-RUNAWAY` -- a per-event rebuild drains after the finger stops
- `HEX-AUTO` -- the generator PARTITIONS -- only the deepest claimant is written, every cell is claimed, and the sizes come from CE_MAP_KINDS rather than a second list
- `HEX-PORTABLE` -- the map ships in BOTH doors -- exportAll's `hexMap` and the lorebook pack's `hexMap` string
- `CHAR-IDENT` -- species, age, gender and role are asked by the seed pass on ALL THREE character shapes, ABOVE the shape's own questions. They are RECORD COLUMNS, not custom fields, and reach them through _ceCharSeedIsColumn -- which is why commit needed no change
- `CHAR-IDENT-REGRESSION` -- they had no writer on the Build path at all. STATIC_FIELD_DEFS is four narrative fields and never held them; generateCharacterFields did, and CHAR-SEED-DIRECT correctly stopped running it for a seeded row
- `CHAR-IDENT-SPECIES` -- the world's own species records are offered to the ask as a CLOSED LIST when any exist, in the system block where the batch pays for them once
- `CE_SEED_SHORT` -- a def may declare itself a one-line answer; _ceSeedFieldRow reads it and the format block tells the model the same thing
- `CAST-PAT-ROLL` -- the roll is a WRITE at row mint, never a fallback inside ceCastRowPattern -- that resolver is read at render, at seed and at commit, so a random answer there would differ on every repaint and commit a pattern the seed pass never used
- `CAST-PAT-SHAPE` -- the picker is a STUDIO control; classic and custom consult no pattern
- `CAST-PATTERN` -- the pattern is a PER-ROW field (CE_DRAFT_PAT_KEY) defaulting to the first of CE_PATTERN_ORDER, changed on the row and answered by Re-seed
- `BUILD-TURN-CORE` -- the build dock's send / press / regenerate are one runner and three doors, on CHAT-TURN-CORE's argument
- `DOCK-PRESS` -- Send with an empty box asks it to go on. The directive is transient, never a stored turn
- `DOCK-REGEN` -- offered on the tapped LAST reply only, behind the same tap edit and delete already live behind
- `MEM-HEAD` -- ATTG and Style target MEMORY and lead the block; assembleWizardMemory emits an already-bracketed body verbatim so the tag line is not given a heading
- `WORLD-PICK-ANSWERED` -- the chooser is shown which questions already hold text, so a second press does not mint a new question for ground that is taken
- `WORLD-QLIST` -- CE_P_WORLD promised "a fixed set of questions, listed below" and nothing was ever listed
- `WORLD-NO-ECHO` -- each world question is a separate call reading one transcript, blind to the others
- `P-WORLD-SPAN` -- THE WORLD SITS ABOVE THE FAMILY SPLIT in ceBuildHead, so all four utility channels -- chat, name, seed
- `SEED-WORLD` -- the seed system block carries the World stage's ANSWERED questions and the charter's play tier
- `SEED-DOCTRINE` -- CE_P_SEED_WHAT promises "a later pass writes the real thing" -- TRUE for a builder seed, FALSE for a classic body, which IS the artifact
- `SEED-CLASSIC` -- a classic ENTITY has no questions and one BODY, so the seed pass asks for prose instead of lines, the parser lifts BODY off before the line parse
- `HEX-FLOOD` -- brush size 0 is Fill; "the same" is RESOLVED AT THE DRAWN TIER and is passed in, never guessed, and only a press floods -- a drag never does
- `PRIMER` -- the "?" is a nav SIBLING outside the scroller and opens a full swap, third of that family; topic text is table data, never comments, and its links navigate
- `SPEC-PICK` -- CharacterRecord.species stays a STRING, not an id

### Navigation

- `ROUTES-RULES` -- the nav is Scene, Cast, World, Story, Rules, Images, Build and the gear, placed by the four filing rules (CE-STYLE 15); route ids never change, labels do
- `RULES-ROUTE` -- Rules is the story's vocabulary and Settings the tool; one _ceSettingsRoot serves both, props.scope picks CE_RULES_TABS or CE_SETTINGS_TABS, and System is Settings > General with every group folded
- `CAST-ROUTE` -- Cast is People (_ceCastPeople around _ceMapCastTab, the cast's home list) and Conversations (_ceChatRoot with props.tabRow); 'chat' and 'map:cast' resolve there
- `TAP-FLOOR` -- 44px is the floor for the HIT AREA of every standalone target, nav and tab cells and crumbs included; the visual stays compact; an inline link in a sentence is the one exemption
- `NAV-TRAIL` -- ceNav pushes 'back' onto ceUiStore.trail (cap 12), a nav with no back starts a fresh trail, arriving at an address on the trail cuts it there; ceBack draws the crumb row and a drill passes itself as the leaf
- `NAV-ALIAS` -- CE_NAV_ALIAS rewrites a moved 'surface' or 'surface:tab' inside ceNav, once, so stored addresses, primer links and old call sites land somewhere real
- `NAV-HERE` -- ceHere() is the current address, labelled with the record's name or the route's word; pass it as 'back' when a nav leaves something
- `GOTO` -- CE_GOTO is where every configured thing lives; cePointer/ceGoto render a link with a way back, ceGotoLabel serves copy that cannot be tapped, ceGotoAddr opens the shell when it is shut
- `GROUP-FOLD` -- ceGroup's third argument folds it, closed by default; fold ids are 'fold:<name>' and unique, and Find and ceGoto open one before navigating
- `FIND` -- one search over every record and every screen: CE_PICKER_DEFS.find with rows built by ceFindOpen, screens and Settings groups registered in CE_FIND_PLACES with search keys; the cell sits beside the guide outside the nav scroller
- `HERO-DOORS` -- the character hero's doors are visible: an Edit button for Identity, a labelled avatar for Images, and faction and one-liner shown in the hero
- `PAGE-HEAD` -- cePageHead is the one header for a character's page and a record's: name block and pencil open Identity, verbs that act or leave sit under it, an optional status line closes it. A record's icon and Kind are in its Identity drill
- `PAGE-TABS` -- record pages are tabs, not launchers. Character: Profile, Relationships, Status, Schedule, Images, Behaviour (CE_PROFILE_TABS). Place: Profile, Atmosphere, Connections, Images; species: Profile, Connections, Images; others Profile, [type tabs], Connections (ceEntityTabsFor). Old drill names land on their tab (CE_PROFILE_DRILL_TABS, CE_ENT_DRILL_TABS)
- `PAGE-FACTS` -- the head's facts are labelled pairs (cePageHead facts, _cePageFacts); unset shows a dash; a fact with somewhere to go is a link padded to the 44px floor. _ceSchedFact says what a timetable has someone doing this hour
- `THREAD-STATE` -- a thread's Waiting/Running/Finished is three buttons in its head (_ceThreadStateBlock, ceThreadSetState); leaving Running clears the active-thread pointer in the same press
- `EVT-NUDGE` -- ceEncounterNudge moves a live encounter's track one step by hand through stateNudge, from the thread page and the Actions panel; republishes the thread page only when it is on screen
- `HERO-SWITCHES` -- the character's switches live on Behaviour; the head keeps a read-only status line whose Change link opens that tab
- `BODY-PAGE` -- a character-typed entity renders a short body page (where it stands, contents, icon) with one verb to their page and no pencil
- `LAUNCH-NAMES` -- the launcher rows are gone; their doors became tabs, groups or head verbs, and what is behind a door is named for it (Behaviour, not Settings)

### Surfaces and Layout

- `TRAY-PREFS` -- which toolbar buttons show is account-global (api.v1.storage `ce_toolbar_items`), absent means default; clock items nudge or open Story > Calendar; the last route button cannot be turned off
- `TRAY-OFF` -- a route with tray 'off' is offered on the toolbar list but starts off (Rules, Build, Settings), so a phone whose nav row scrolled them out of sight can still reach them
- `COLOR-TABLE` -- the palette is a frozen array and a colour can be an index into it
- `COLOR-PICK` -- one colour picker, built rather than the platform's
- `FIELD-LIVE` -- what is in the box right now, asked of the ELEMENT
- `READ-FIELD` -- ceReadField -- label over prose, whole row taps to edit; `prompt` is required, because a read view that omits what is missing gives no way to add it
- `TRAIL-NUM` -- ceTrailNum -- nowrap signed number for a card trail
- `EDIT-SLOT` -- click-to-edit is the profile-wide standard
- `LIST-DRAFT` -- a list commits on blur and its buttons fire on click, which arrives first (CLICK-BEFORE-BLUR)
- `LIST-SWEEP` -- the rule applies to every list editor, not the reported one
- `IMG-MODEL` -- the NAI model is a setting, not a bridge literal
- `GAL-MULTI` -- select mode is a MODE and the whole cell is the checkbox; "Select all SHOWN" can only ever name what GAL-WINDOW has painted, so Delete cannot destroy records the author has never seen. One op (deleteMany), one transaction, one index re-send
- `GAL-WINDOW` -- the gallery renders at most CE_GAL_PAGE cells, POST-SCOPE, at one mint site -- so both scopes were always capped. The crash it was built for came from the bridge reading every record's bytes to build the metadata index [GAL-BYTES], which no cap on this side could have touched
- `GAL-THUMB` -- a gallery CELL asks for the thumbnail and the full view asks for the image; CE_IMG_THUMB is the difference and the bridge owns both
- `FLEX-SHRINK0` -- a fixed-height image in a flex column is crushed: flexShrink 0
- `MINWIDTH0` -- the inline axis was never constrained: minmax(0,1fr), minWidth 0
- `ROW-STACK` -- a control that cannot shrink takes the row's SECOND line
- `NAV-ONELINE` -- the nav row's overflow does not zero its ancestors' min-content
- `SCENE-STAGE` -- the location frame is a wrapper and every image is a leaf sibling inside it
- `SCENE-STAGE-TUNE` -- four numbers, one table, all the author's
- `SCENE-STAGE-ROW` -- reserved lanes are gone
- `CHAT-STAGE` -- the second stage, sharing NO geometry with the first: it draws into NAI's own editor
- `AN-AS-SENT` -- the Author's Note is shown as sent, sentinel included
- `GUIDE-BODY` -- a '?' glyph and its body are minted by the same function
- `FIELD-SEED` -- a field row without a seed writes and shows nothing
- `FIELD-BARE` -- a FOURTH ceField state, and the one where the field is not the object: chrome off, machinery untouched, so a composer's box and its Send can share one pill
- `ICONBTN-ROUND` -- 'round' is the committing verb at the end of an input row. A SHAPE, because there is no colour token here to make a primary out of. Variants stay exclusive
- `CE-FSBODY` -- message prose, 15px, and the one role in CE_T that is not UI text
- `SHELL-CHROMELESS` -- a surface may own its whole frame and go without the nav row
- `SELECT-DIRTY` -- a touched <select> ignores a new `selected`; remount on `cur`
- `STYLE2-SWEEP` -- token vocabulary; change fsKey/fsMono in the same patch
- `WEB-FLATTEN` -- the pair record is flat; salience is the per-side tier
- `ICON-LIB` -- paint is emitted as a style STRING -- the JSX property handler drops SVG-specific properties like fill
- `ICON-FIT` -- an icon is fitted and centred on `cb` when it has one, one box per SET and never per icon
- `ICON-WEIGHT` -- `sw` is a stroke in SOURCE units, for line art authored as fills
- `ICON-TWO-SETS` -- the kit glyph set and CE_ICON_LIB are addressed differently -- a function name versus a string an entity stored -- so only one of them can never be renamed

### Prompt Bench

- `BENCH` -- a prompt is tested by what it DOES: one live prompt, a fixed input, CE_BENCH_RUNS runs, each answer checked in code against the test's one-sentence contract. Settings > Bench
- `BENCH-INPUTS` -- a test calls the LIVE builders fed its fixture. The `...From` twins (ceEvalMessages, ceWorldSpanFrom, ceBuildChatMessagesFrom, ceWorldExtractParams) exist so no bench restates a prompt
- `BENCH-FIXTURE` -- fixtures use nouns no story uses and are never lifted from a failing input; each pair differs by ONE fact
- `BENCH-TRANSPORT` -- each test uses its prompt's own transport. The world suite goes through generateWithStory and is run in an empty story
- `BENCH-INFRA` -- a transport failure stops the test and is reported apart from the count; it is not a failing run
- `STORAGE_BENCH` -- tempStorage `ce_bench_v1`: this session's counts. They leave through Export and never touch the story file

## Measured platform facts

Runtime facts the typings do not state, measured by probes that no longer exist [DIAG-CUT]. No code site by nature; kept because the answer is what was worth keeping.

- `PCP-CACHE-SPLIT` -- glm-4-6 and xialong-v1 have INDEPENDENT prefix caches that do not evict each other
- `PCP-MODEL-HONOURED` -- api.v1.generate serves model:'xialong-v1'.
- `PCP-PREFILL` -- a trailing assistant turn IS continued, on BOTH models -- "Kesserel: yeah, I" returned "'ll be there"
- `PCP-PREFILL-REACHES` -- A trailing assistant turn is billed, so it reaches the prompt.
- `PCP-TOKENIZER-SAME` -- xialong-v1 and glm-4-6 return IDENTICAL token ids for one sample, so they share a vocabulary

## Capability without a door

Anything else that is unreachable is a bug, not an entry here.

- `copyEntity` -- declared, no caller. Wants a button on Entity.

## Known staleness

- [BENCH-TRANSPORT] The world, name and seed passes go through `aeDiagGenerateWithStory`, so the open story's built context sits in front of every Build prompt. Unchanged in 3.14.9; BUILD2 phase 1 decides it.
- [CHARTER-AN] [VOICE-SPLIT] The two `an`-targeted wizard sections (ATTG, Style) are gone from the defaults; they survive only in worlds written before that, still reaching the Author's Note through `ceAuthorNoteBody`'s fallback. `ceWorldIsVoice` keeps them out of the pipeline. The fallback goes when the last such story does.
- Resolutions do not rewind: stateValues live in storyStorage and Undo rewinds historyStorage, so an undone turn keeps the damage. `onHistoryNavigated` is where a continuityId-keyed reversal would go.
- [ROLL-WRITES] `ceRollNow` calls `ceWriteMoveToStory` itself; the Write button remains for the case that call fails. If that path proves dead, the button goes.
- [EVT-BAND] A band-addressed terminal stores an index, so reordering or removing a band re-points its directive. Not clamped (that would fire the wrong directive). The fix is remapping terminals inside `ceIndexedBands`' reorder and remove handlers.
