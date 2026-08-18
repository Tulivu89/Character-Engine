# Character Engine — User Guide

IMPORTANT: To utilize image generation for illustrations, you must install the bridge script via violentmonkey.github.io or Tampermonkey. Once you have either browser extension, install the bridge script below.
https://greasyfork.org/en/scripts/587717-character-engine-bridge-hud

*Part 1: getting in, finding your way around, and how a character is put together.*

---

## What this is for

Left alone, an AI writing partner forgets who your characters are. Not their names — their *stubbornness*. The quiet one starts monologuing. The one who swore never to go back goes back, cheerfully, three paragraphs later. Nothing dramatic breaks; the people just quietly stop being themselves.

Character Engine is a set of tools for stopping that. It keeps a record of who each character is and what they currently want, and it feeds a small, sharp slice of that record into the story as you write — every beat, automatically. You do the deciding. The engine does the remembering, and the reminding.

You don't need to understand any of it to start. Make a character, write, and the rest will make sense as you meet it.

---

## Before you start: make a location

**Create at least one location before anything else.** This is the single most common way a first session goes wrong.

Characters don't float in the abstract — they stand *somewhere*, and the engine works out who's in your scene by looking at where your camera is and who is in that place. With no locations, there is nowhere for anyone to be, so the engine sees an empty scene no matter how many characters you've made. Everything looks correctly filled in and nothing happens.

Open **World**, make one location, and put your characters in it. One room is enough to start.

---

## Getting in

Three ways in.

**The toolbar buttons.** Along NovelAI's toolbar you'll find one small icon per destination — a map, a group of people, a book, a flag, a speech bubble, a picture. Tap any of them and the engine opens directly to that destination. This is the everyday way in.

**Anywhere inside the engine.** Once you're in, the row of tabs across the top takes you anywhere else. You never have to close and reopen to change destinations.

**The Actions panel**, which is a different kind of thing and is described in Part 3. It isn't one of the destinations and it doesn't live in the tab row: it opens from NovelAI's own panel list as **CE Actions**, and it appears *below the editor* rather than over it, so your story and NovelAI's Send button stay on screen while you use it. That placement is the whole point of it — see Part 3.

### Full screen or window

By default the engine opens as a full-screen panel. That's the most comfortable way to work on a phone, but it does cover the story.

If you'd rather see both at once, go to **Settings → Interface** and turn on **Open in a window**. The engine then opens as a floating panel you can drag and resize, with your story visible beside it. Handy when you're writing and adjusting a character in the same breath.

The switch applies the *next* time you open the engine — it can't rebuild the container it's currently painted inside. Close it and reopen, and you're in the new mode. The setting is remembered across every story.

---

## The eight destinations

Across the top of the engine is a row of tabs. Seven words and a gear.

**World** — where everything is, and when. Rooms, buildings, regions, who's standing in them, and the clock and calendar. This is also how you move: your camera is a location, and the story follows it. Three sub-tabs live here — Map, Entities, and Time — covered in Part 2.

**Scene** — where you are and who is here, right now, with you. The cast of the current moment.

**Story** — the record of what's happened and what's pushing the story forward. Your Journal and your Threads live here, as two sides of the same surface.

**Diplomacy** — every faction in your world, and where your protagonist stands with each. This is also where a faction gets made.

**Chat** — talking to a character directly, outside the story. Not narration; conversation.

**Images** — pictures of your characters and places, and the settings that shape how they're generated.

**Wizard** — the guided builder. When you want to make something new and would rather be asked questions than face a blank form.

**⚙ (Settings)** — everything else. World rules, what gets injected, the numbers your characters carry, how rolls are judged, the calendar, and interface preferences.

> **If you used an earlier version:** Map is now **World** (the surface grew a clock and an entity list, so a name for half of it stopped fitting), and Journal is now **Story** (it grew Threads the same way). Both keep their old address internally, so nothing you've built moves. **Diplomacy** is new — it's where Factions used to live under Settings, given a screen of its own because where everyone stands is a map of the story's politics, not a preference.

---

## The protagonist

One character in your story can be marked as the **protagonist**: the person the story is about, and the person *you* are.

You set it from that character's profile — tap the **Protagonist** chip under their name. Tapping it again on the character who already holds it clears it, and having no protagonist is a supported state, not a hole. Only one character can hold it at a time; marking a second one moves the mark rather than adding to it.

It is worth doing early, because five separate things quietly key off it:

- **The Actions panel rolls as them.** Every attempt you compose in Part 3 is made by the protagonist. Without one, the panel has nobody to roll for.
- **Protagonist-scoped states are theirs.** Coin, Luck and anything else you scope that way live on whoever currently holds the mark (see Part 3).
- **They lead the Dramatis Personae.** The cast list the engine writes into your lorebook names them first and says who they are.
- **They are a target you can point at.** When you set a character's Position, "you" appears at the top of the list of people they can be oriented toward — the most common case in most stories, and unreachable without this.
- **"Here" means where they are.** The Move picker in Part 3 lists whatever shares their room first.
- **Diplomacy shows their standing.** Every faction row on the Diplomacy tab reads their standing against it, by name. With no protagonist set, that tab can still list your factions — it just has no standing to show.

> **Moving the mark does not move anybody's numbers.** If you make a second character the protagonist, the first one keeps the protagonist-scoped values already on their record — their Coin stays their Coin. This is deliberate: whose money it is after a handover is an authoring question, and the engine would rather leave it to you than answer it silently. If you want the values moved, move them by hand.

The protagonist's profile is an ordinary profile and everything in the rest of Part 1 applies to it. Their name reads **(you)** in the header wherever they're listed.

---

## Character profiles

A profile is one character's whole record in one place. You reach it by tapping their name — from Scene, from the Map, from anywhere they're listed.

### The top of the page

The character's **name**. Tap the name to open **Identity**, where the basics live: species, age, pronouns, the descriptive bones.

Beneath it, a row of small switches. These matter more than their size suggests.

#### Protagonist

Covered above. Off for everyone but one person.

#### Follow

Off by default. When it's on, this character goes where you go — move your camera to a new location and they move with you, automatically, every scene.

Turn it on for a travelling companion, a bodyguard, a dog. Turn it off when they should stay put; an innkeeper who follows you across the continent is a bug you created.

#### Dynamic / Static

Whether this character is treated as live cast or as a record on file. Dynamic characters are the ones the engine works on between your turns; Static ones sit quietly until you need them.

**That background work is a budget.** Everything the engine generates between turns is real time spent while you wait, so there are controls for it in **Settings**:

- **A cap on how many characters get updated per turn.** Present characters beyond the cap simply don't get processed that turn — they're queued and go first next turn rather than being dropped.
- **The update interval** — how often updates come round, measured either in generations or in tokens, whichever suits how you write.
- **Ranking**, so that when the cap bites, it bites the right people. Ranked characters fill the available slots first, in rank order; unranked ones take whatever's left.

The short version: Dynamic for the people who matter this scene, Static for everyone else, and revisit it when a scene gets crowded.

#### Thoughts

Whether the engine generates a running read of what this character is thinking — what just happened to them as they saw it, how they feel about it, and what they want next. You'll see a 💭 notice when it refreshes.

This is also the update that moves two of the three pressure axes (see below), so turning it off doesn't just quieten a character — it stops **Pursuit** and **Position** from tracking.

#### Hooks on / Hooks off

Whether the engine tracks and escalates this character's **Hook** — the long-running want or grudge that builds across the story. You'll see a 🎯 notice when it updates.

A character has **one** hook at a time, not a list. That's on purpose: a character with three simmering wants has none, because nothing is ever the thing that finally comes to a head. When one resolves, the next one can begin.

This is a separate switch from Thoughts, and it drives a separate axis. On for anyone with an agenda; off for anyone who is furniture.

---

## Two profile shapes: Classic and Profile Plus

At the top of the profile is a two-button switch. These are **two different shapes for the same character**, not a beginner mode and an advanced one. Which you use is a preference.

**Classic** is the standard profile shape — the conventional layout, with **Drive** (Core and Pursuit) folded in as a section.

**Profile Plus** is a different shape, built around a specific model of what makes a character behave consistently. It's the shape AmbiProp uses for Dynamic characters.

> **Don't run both at once on the same character.** They overlap. Filling in Classic and Plus for one person gets you two descriptions of the same thing competing for the same space in the AI's attention. Pick a shape per character and stay in it.

---

## How Profile Plus is put together

Profile Plus has five sections, and they are not independent — one of them determines the meaning of two others. Read them in this order.

### Presence

How they land in a room before they've said anything. Build and bearing, then colouring, then voice and the way they move. Only what a stranger could perceive from outside — no history, no motive.

Keep it to two or three sentences and resist hunting for one striking feature to lead with. Sweep from silhouette to detail.

### Drive

Two fields, and the difference between them is the point.

- **Core** — the one thing they will not let go of. The person, belief, wound, or hunger everything else bends around. It has to still be true if every current plan fails, which rules out both goals and personality traits. If they could simply achieve it and be finished, it isn't a Core.
- **Pursuit** — what they're actively going after right now; the concrete objective you could watch them working on this scene. Name the object, not the value: *"get her brother's name off the ledger,"* not *"seeks justice."* Phrase it so it can plainly succeed or fail. Leaving it empty is fine — a character chasing nothing is complete, not unfinished.

### Pattern

**Pattern is the load-bearing choice.** It doesn't describe the character directly; it decides *what kind of thing* Resistance and Conduct are for this person. Change the Pattern and those two fields change meaning underneath you.

There are six:

- **Contradiction** — a second thing that is also true of them, pulling against the Core.
- **Want / Need** — a substitute they sincerely chase in place of the Core.
- **Defense** — something holding the Core exposes them to, which they cannot afford to have seen.
- **Rule set** — laws they keep while pursuing the Core, one of which the Core will eventually force them to break.
- **Appetite** — something they cannot refuse, and the one line they keep anyway.
- **Function mask** — a role they perform which forbids them the very thing the Core wants.

### Resistance

**What holding the Core costs them** — shaped by the Pattern you chose.

If the Pattern is *Contradiction*, Resistance is the competing truth pulling against the Core — a second real thing, not a flaw, with neither half being the "real" one. If the Pattern is *Defense*, Resistance is the exposure they're hiding. If it's *Rule set*, it's the laws and the one that will break. Same field, entirely different question, depending on Pattern.

This is where drift gets stopped, because drift is almost always a character agreeing to something they'd never agree to.

### Conduct

**The standing move when that cost comes due** — again shaped by the Pattern.

Under *Contradiction*, Conduct is which side shows by default and the specific circumstance that brings the other out. Under *Want / Need*, it's how they pursue the substitute and who pays for it. Under *Function mask*, it's the performance and the tell that gives it away.

Conduct is behaviour others can watch happen, not feelings. Two sentences is usually enough.

### Facets

Presence, Drive, Pattern, Resistance and Conduct are **slots** — a fixed set, the same on every character, with Resistance and Conduct gated by Pattern. You can't add or remove them.

**Facets** are the open half. They're extra fields you add yourself, through **+ Add facet**, for whatever this particular character needs that the slots don't cover — a trade, a superstition, a speech habit, a history with a specific faction. Mechanically they behave exactly like slots: same editing, same generation button, same feed into the story. The only difference is that slots come with the model and facets come from you.

Add them sparingly. Each one is more text competing for the same attention, and a character with fourteen facets is usually a character whose Core hasn't been written properly.

---

## Pressure: Hook, Pursuit, Position

The engine tracks **pressure** on a character across three axes. Each is a number that rises when the character is *blocked* and falls when they *advance* — so a high number means "this has been pushed on and hasn't given."

The three axes come from two different background updates, which is why they have separate switches:

| Axis | Driven by | Range |
|---|---|---|
| Hook | the **Hooks** update (🎯) | 0 to 4 |
| Pursuit | the **Thoughts** update (💭) | −4 to 4 |
| Position | the **Thoughts** update (💭) | −4 to 4 |

Turning Hooks off stops the Hook axis and nothing else. Turning Thoughts off stops Pursuit and Position.

**Hook** — how loaded their central want has become. Something they've been circling finally coming to a head. Hook only ever climbs from zero; it has no negative side, because a want that isn't pressing simply isn't pressing.

**Pursuit** — how thwarted they are on the thing they're currently chasing. This one runs negative as well as positive: below zero means they've been making progress, above zero means they keep being stopped.

**Position** — where they stand *with one specific person*. This axis only appears once a character has someone they're oriented toward, and it's labelled with that person's name — **With Marek**, not "Position." Point a character's Position at someone new and the meter starts over at zero: evidence gathered about one person isn't evidence about another.

Open **Pressure** on the profile and you'll see all three as small meters. Their colour tells you the temperature at a glance: quiet, **building**, or loud enough that the story is asking for something to happen.

Two things are worth understanding about these numbers.

**The AI never moves them.** Not once, not ever. Every change is either something you set by hand, or a rule firing on something concrete that happened. This is deliberate — a system that let the AI adjust its own reminders would drift in exactly the way you installed it to prevent. When nothing is happening, pressure stays where it is. Inaction is stable, not decaying.

**You can move them yourself.** Each axis has a stepper. If a scene landed harder than the engine noticed, nudge it up. If you wrote something that defused a situation, bring it down. You are the authority; the engine is keeping score, not refereeing.

### A Position that reaches its end

Position is the one axis with a far end that *means* something. Drive it to either extreme — by playing, by rolling, or with the stepper — and the engine stops and asks you a question, because a relationship that has been pushed as far as it goes has changed rather than merely become tense.

What you're asked for is two lines: what these two people **are** to each other now, and where they **stand**. Both come pre-filled with what was already there, and leaving them alone is a real answer — the story still moves; only the words about it stay as they were.

If the threshold was crossed by a roll, the question appears inside the Actions panel alongside the outcome, and both are committed by the same button. If you crossed it with the stepper, it waits for you on the profile.

### Thoughts history

Under each axis is its **history** — the running record of what pushed that number where it is, and, importantly, what got *blocked*.

Blocked entries are the useful ones. They're moments where the character wanted to move and something stopped them. If you're ever unsure why someone is behaving the way they are, this list is the answer, in order.

---

## The rest of the profile

Along the profile you'll find a row of further sections, each opening a page of its own:

**Walkthrough** — the guided build, question by question.
**Images** — this character's portraits and the prompt settings that shape them.
**Journal** — what's happened to *them* specifically.
**Chat** — talk to them directly. Covered in Part 2.
**Equipment** — what they're carrying, and what they could be.
**States** — the numbers this character carries: health, stamina, their four approaches, standing with a faction, how drunk they are. Defined once in Settings, held per character here. Covered in Part 3.
**Schedule** — where they are when the story isn't watching, and what they're doing there. The same editor a location's Atmosphere uses — see Part 2. Nothing here ever moves someone who's in the scene; it only fills in the gaps around it.
**Entity** — this character's *body*: where it stands in the world, and what connects to it.
**Settings** — the per-character switches that don't fit anywhere else.

Each of these opens with a **← Profile** button at the top to bring you back.

> **Conditions are gone, and States are where they went.** If you used an earlier version, "injured / drunk / disguised" was its own list with its own editor. It is now one kind of state among several, and your existing conditions were migrated across automatically — same names, same stages, now with a number behind them. Nothing was lost and there is nothing to redo.

---

# Part 2: Scene, World, Diplomacy, and Chat.

---

## Scene

Scene is where you are and who is with you. It's the destination you'll open most.

At the top, a clock: the current time and date, if your world keeps one, with a pair of buttons to nudge the hour. This moves the same clock the World tab's Time view shows — it's here too because time is a scene fact in exactly the sense the rest of the page is.

Beneath that, a picture of the current location if one has been generated. Beneath it, the **Location** section — where your camera is right now, and its Description underneath the name. Everything else on the page is derived from that: the engine works out who's present by looking at who is in this place.

This is why the location matters so much. Move your camera and the cast changes; if the cast looks wrong, the answer is almost always that somebody is in the wrong room rather than that the engine has lost track of them.

Two buttons:

**Refresh** — re-reads the scene. You shouldn't normally need it; it's there for when you've made changes elsewhere and want to see them reflected immediately.

**New character** — makes a character and drops you straight into their profile. This is the fastest path from "someone just walked in" to a usable record.

Tapping any character in the list opens their profile.

---

## World

World is where everything is, when it is, and how you move. It has three tabs of its own: **Map**, **Entities**, and **Time**.

### Map

Your world is drawn as **nested circles** — a region containing settlements, a settlement containing buildings, a building containing rooms — each one sitting inside its parent. It's a shape that shows containment at a glance: you can see that the kitchen is in the inn, and the inn is in the town, without reading a single label.

#### Getting around

The map is fully free-form. You can:

- **Drag** to pan anywhere.
- **Pinch** to zoom in and out — real two-finger pinch, not a stepped zoom.
- **Tap a circle** to zoom to it, which is usually faster than pinching your way down.

Zooming is anchored to the centre of what you're looking at, so pinching in doesn't drag you off toward a corner.

As you zoom, labels appear and disappear. The map shows the level you're focused on and its immediate neighbours rather than every name at once — zoom into a building and its rooms name themselves; zoom out and they get out of the way. Character names appear inside a circle when there's room for them at the current zoom, which means the map gets more informative the closer you look rather than more cluttered.

#### Moving

Your camera is a location. Setting it somewhere is how you move the story — the scene follows, and any character with **Follow** turned on comes with you.

Tapping a place opens it, from where you can set your camera, look at what's inside, or edit the place itself.

To move *somebody else*, or to move a thing, use **Move something** in the Actions panel (Part 3). It's quicker than navigating to them.

### Entities

Everything that exists, in one searchable list — every location, character, item, faction and thread, each indented under its parent. This is the map's back door: the canvas next door can only draw places it knows how to position, so anything tucked inside a container, hidden, or not a place at all (an item in a chest, a faction, a thread) lives here instead.

Search flattens the list rather than filtering the tree, so a match shows up with a plain "— in *wherever it is*" instead of dragging every ancestor down with it. Tap anything to open it — a character's row opens their profile directly, since a body's record and a character's record are the same thing.

### Time

The live view of your clock: the date and time, everyone's day laid out as a strip so you can see who converges on a room and when, and a calendar grid you can tap a day on. Dated entries you've pinned to specific days show here too.

This is for *reading and nudging* the clock as you play. Defining the vocabulary it runs on — how many days are in a week, what the months are called, whether the hour is told to the story at all — is a separate job, and lives on **Settings → Time**, covered in Part 4.

### Writing a place

Open any location and you'll find a few things worth knowing apart:

- **Description** — a working note for you: what someone standing there takes in, generated in two to four sentences. It's what shows on cards and lists (Scene, Entities) and it seeds the lorebook entry, but it does not reach the story on its own — and now that Atmosphere exists, it's also that place's *fallback* when no atmosphere has been set.
- **Lorebook entry** — this is what actually reaches the story when the place is named. Facts, not atmosphere: who controls it, what happens there, what it's known for.
- **Atmosphere** — what the place is *like right now*: what's heard, who's about, how it feels. Unlike the other two, this reaches the Author's Note on its own, every turn you're standing there, whether or not the place is ever named. Until you set one, the place's Description answers instead — which is exactly how every place behaved before Atmosphere existed, so writing nothing here breaks nothing.

Items have the Description/Lorebook entry pair too, aimed differently. An item's **Description** is folded into the *carrier's* lorebook entry while it's being worn, so it's written to read as part of their entry rather than as its own; the item's **Lorebook entry** is its own, and injects when the thing is talked about whether or not anyone is holding it. Items don't carry an Atmosphere — only a place does.

Every generate button takes whatever you've already typed as a steer, and the **?** beside each shows you the exact instruction being sent.

#### Setting an atmosphere (and a character's schedule)

Atmosphere is written as a **schedule**, and it's the same editor a character's own Schedule (Part 1) uses — one editor, two owners. The only structural difference: a character's stops name a *place*, because a person can be somewhere; a location's stops can't, because a place can't travel to itself.

A schedule is built from **plans** — a default "standing day" plus as many named alternates as you like ("Market day", "When it's raining") — and each plan is a row of **stops**, an hour and a line of text: what it's like at that hour for a place, or where a character is and what they're doing for a character. Below that, **rules** decide which plan answers for a given day, checked in order and falling back to the standing day when none match; a **Force this on** switch pins one plan permanently, ahead of the clock and every rule, for whenever you want to override the lot by hand.

For a character, the "doing" text is what leads their line in the Author's Note whenever they're in the scene — a quiet "wiping down the bar" before the sentence that says who's present. It doesn't relocate anyone on its own; a character in the scene stays in the scene regardless of what their schedule says. It's there for texture, and for your own reference when you're deciding where someone off-camera would plausibly be.

---

## Diplomacy

Every faction in your world, and where everyone stands.

**Our faction** sits at the top, and it's optional. Naming one lets an attempt in the Actions panel be framed as your faction against another; leaving it as **Nobody** is a story where the protagonist answers to no one.

Below it, every faction you've made, each row showing your protagonist's standing with it in plain language — *"Marcus is Hostile toward the Iron Circle,"* or *"No standing here yet"* if nothing's been set. With no protagonist, the list still shows — it just has nothing to report. **· ours** marks whichever one you named above.

Tap a faction to open its own profile, which is the same profile pattern a character gets, with four tabs of its own:

- **Profile** — its name, description, and lorebook entry.
- **Roster** — who stands with it, derived from standing rather than stored separately, so it can never list someone who's since fallen out.
- **Standing** — the ladder itself: the rungs a character's standing with this faction can occupy, world-default unless this faction overrides it.
- **Resources** — whatever it owns: a treasury, its unrest, however many boats it still has. States scoped to the faction rather than to any one character.

**+ Add faction** makes a new one. A faction with nothing in it yet is still legal — the moment it exists, everybody in the world has a standing with it, even if that standing has never been touched.

> **If you used an earlier version:** this replaces Settings → Factions, which is gone. That tab only ever created, renamed and deleted factions; this does that too, beside the thing that actually made a faction worth looking at.

---

## Chat

Chat is for talking to a character directly, outside the story. It doesn't narrate and it doesn't advance your plot; it's a conversation.

Each conversation is saved as its own thread, so you can leave one and come back to it. Threads are kept per character *and* per mode, so a character you've been texting and a character you've interviewed are two separate conversations that don't contaminate each other.

Chat runs through NovelAI's normal Send. That matters for one practical reason: it doesn't consume the engine's background budget, so a long conversation costs you nothing in terms of the engine's ability to keep working on your characters.

### Modes

Chat has a **POV** setting that decides what kind of conversation you're having.

**No POV** — you, as yourself, talking to the character.

**As another character** — the conversation happens between two of your characters, with you writing one side.

**Interview** — described below, and worth its own section.

There is also a **Kind of conversation** setting, which is a different question: a text thread, people talking in person, or a scene played one turn at a time. It sets the register, the length, and how the model is asked to write.

### The interview

Interview mode is for finding out who a character is by asking them.

The premise is straightforward and it's enforced: **the interviewer is a real person sitting across from them, asking about things the character lived through.** The character doesn't know they're in a story. They've never read a manuscript. They can't discuss chapters, plots, arcs, scenes or character development, because as far as they're concerned none of those things exist. They answer as themselves, about their own life.

That constraint is what makes it useful. Ask a character in a normal chat "what's your arc?" and you'll get an author's answer. Ask them in an interview what happened the night their brother left and you'll get theirs.

Practical notes:

- **Answers are spoken, not texted.** Ordinary chat is calibrated for short messages — a phone conversation, brief replies. An interview isn't; the character is given room for a natural spoken answer rather than being squeezed into a text message.
- **The interview lives outside the story.** It's marked in your document as a temporary region — clearly delineated, and removed when you end the interview. Nothing you ask leaks into the narrative unless you choose to keep it.
- **You can summarise an interview into the Journal.** When you've learned something worth keeping, summarise; you get a preview first, and the chat stays open while you decide.
- **Interviews and ordinary chats with the same character are separate threads.** You can have both going and neither will bleed into the other.

Use it when a profile field is blank and you don't know the answer yet. It's often quicker to ask the character than to invent one.

---

# Part 3: Actions — states, rolls, and consequences.

---

This part is optional. Everything in Parts 1 and 2 works without any of it, and plenty of stories never need a die rolled. What follows is for when you want the world to be able to tell you *no*.

## The idea

You describe what you're attempting. You say roughly *how* you're going about it. Dice decide how well it goes, and the outcome is written into your story as a sentence you can edit before anyone generates anything.

There is no list of actions to choose from. There is no "Attack" button. You type what you're doing, in your own words, because a library of pre-written actions is a library of things you're allowed to try — and the whole point is that you can try anything.

## States

A **state** is a bounded number with words attached. Health, coin, stamina, how far you've fallen in with a faction, how drunk somebody is. All of them are the same thing underneath, differing only in their range and the words they carry.

You define them once in **Settings → States**, and then they're held per owner. Each has:

- **A range and a starting value.** Health might be 0–4 starting at 4.
- **Bands** — the words. "is unhurt" at 4, "is hurt" at 2, "is dying" at 0. The band is what the story is told; the number is for you.
- **A resting band.** The one that means "nothing to report." A state sitting in its resting band injects nothing at all, which is what stops eleven states filling your context with the news that everyone is fine.
- **A scope**, which decides who owns it: every **character**, only the **protagonist**, the **world**, or a **faction**.
- **A category** — free text, purely for your own tidiness. Invent one and you've invented a section heading; nothing else reads it.
- **Optionally, a terminal.** What happens if the value hits the bottom or the top. Health at zero is the obvious one: a character dies, and the instruction you wrote for that replaces whatever the roll was going to say.

States reach the story through your lorebook, as sentences. You control the shape of that sentence per state, so faction standing can read *"Marek is Hostile toward the Iron Circle"* while health reads *"Marek is dying"* — the same machinery, different words.

**The AI never moves a state.** Same rule as pressure, for the same reason. Every change is yours or a rule's.

### What ships already made

A new story starts with a small set you can edit or delete outright:

| State | Scope | What it's for |
|---|---|---|
| Health | character | 0–4, with a death terminal at zero |
| Stamina | character | 0–5, with a collapse terminal at zero |
| Currency | protagonist | Coin |
| Luck | protagonist | Spent deliberately for a bonus; it never drains on its own |
| Force, Focus, Finesse, Flair | character | The four approaches — see below |

## The four approaches

**Force, Focus, Finesse, Flair.** These are states like any other (0–5, one per character), but they answer a different question: not *what* you're doing, but *how*.

- **Force** — directly, by strength or pressure or nerve.
- **Focus** — carefully, by knowing things and paying attention.
- **Finesse** — precisely, by skill and timing.
- **Flair** — socially, by charm and performance and front.

Four approaches cover attacking, climbing, lying, seducing, bribing and lockpicking without any of those needing to exist as an action. You say what you're attempting; the approach says which of your ratings feeds the roll.

They are deliberately **silent** — they have no bands, so the story is never told that you have "Force 3." A model told a character has a 3 in something will write to the 3.

## Rolls

**Settings → Rolls** is where the dice live, and they are data, not a rule of the engine.

A **resolution** is a number of dice, a number of faces, and a table of outcomes. Each outcome has a lower bound on the total, a **label** you read, and a **directive the model reads**. Those are two different texts doing two different jobs, and neither is optional.

The seeded one is **2d6 fail-forward**:

| Total | Outcome | What the model is told |
|---|---|---|
| under 7 | Miss | The attempt fails and the situation gets worse — name the new problem |
| 7–9 | Partial | It works, but at a cost — name the price in the same breath |
| 10+ | Strong | It works cleanly, no hidden catch |

Change `sides` to 20, rewrite three rows, and you have a d20 game. Nothing in the engine knows which system you're playing.

There is also a resolution with **no dice at all** — *"No roll — it just happens."* Use it for things that are certain but not free: resting, paying, travelling. Its outcome carries no directive on purpose. The story text already says you slept; telling the model "this happens as described" spends context restating the obvious.

## Stakes

A roll says how well it went. A **stake** says what that costs, and to whom.

A stake is a small table: for each outcome of a resolution, what the actor pays and what the target pays. Most cells are empty, because most outcomes cost nothing on one side or the other.

Four ship already made, and each is the standing wager for an approach — so if you never open this screen at all, your rolls still have consequences:

- **Blood** (Force) — misses and partials cost health; a strong hit costs the target theirs.
- **Effort** (Finesse and Focus) — costs stamina. Note that Focus is fed by Focus but paid for in stamina, never in Luck: Luck is what you spend on purpose, and a resource that also drains on its own is one you can't plan around.
- **Regard** (Flair) — moves your **Position** with the target rather than any number. A strong hit eases the relationship a tier; a miss strains it. This is the lever charm never had.
- **Coin** — costs money. Not attached to any approach, because buying something is a no-roll move rather than an outcome of charm.

Everything moves by **one point**. In a game where the fiction names the cost — *"it works, but name the price"* — a ledger moving in tens starts arguing with the sentence the model just wrote.

## The Actions panel

This is where all of it is used. It opens from NovelAI's panel list as **CE Actions**, and it appears **below the editor**, not over it.

That placement is deliberate and it's the reason the panel isn't one of the eight destinations: your story and NovelAI's own Send button stay visible the whole time. The engine never generates your story for you — you press Send yourself, whenever you're ready.

### The order of operations

1. **Type what you attempt**, in your own words, in *What you attempt*. This is not a second story input — it's the only one, and it's yours: nothing else in the panel touches your document.
2. **Set the move** below: approach, resolution, target if there is one, what you're risking, and any situational bonus or penalty.
3. **Roll it.** (If your resolution has no dice, the button says *Do it*.)
4. **Write the attempt.** This writes what you typed in step 1 into your document, verbatim, as your own turn. There's nothing to read or edit here about the *outcome* — the dice already landed, and what they said isn't composed into a sentence any more. It's **armed**: a silent directive that will ride your next Send.
5. **Press Send yourself**, in NovelAI. The armed directive rides along as the model's own trailing turn — bare, not bracketed, so it reads as story rather than as an instruction — and it never appears anywhere in your document. The model answers to it; your document only ever shows your attempt.

**Disarm** throws the whole thing away before you send — the directive and any relationship change staged alongside it.

> **If you used an earlier version:** the panel used to compose an outcome sentence you'd edit or **Rewrite**, then write both halves — your attempt and that sentence — into the document together. Rewrite is gone because there's nothing left to reword: the outcome was never written to the story to begin with. This is a deliberate reversal, not a bug — the directive stays in **story voice** by never becoming visible utility text sitting in your document.

### The receipt

Below the composer is the arithmetic, and it is not a diagnostic — it's there because a roll you can't check is a roll you have to trust.

It shows who acted and how, who they targeted, the faces that came up, every modifier and where it came from, the total, which outcome that landed in, and the exact directive text that's armed and will ride your next Send. If a stake was charged, there's a ledger of what moved — **including what couldn't move**, with the reason. A line that's simply missing and a stake nobody wrote look identical otherwise.

If somebody hit a terminal — died, collapsed — the receipt says so, and says that the roll's own directive was discarded. At zero health the outcome is not a partial success that also hurt. It's a death, and telling the model both would let it choose.

**Put this back** appears while a charge is reversible. It reverses those values and nothing else; it does not undo the turn.

> **Known limitation: a roll does not rewind on Undo.** State values live on the character record; NovelAI's Undo rewinds the story. A roll that cost 3 Health and is then undone leaves the 3 gone. *Put this back* and the stepper on the profile are both real repairs — but neither of them is Undo, and you have to reach for them yourself.

## Move something

Below the composer is **Move something**: a picker that puts a character in a place, or an item in a place or a pair of hands.

Tap it and you'll see everything you could move, with **whatever shares your room listed first** — because the thing you're about to move is nearly always the thing standing next to you. Choose it, then choose where it goes. A character can go to a place; an item can go to a place *or* straight to a person, and moving a worn item takes it off whoever had it first.

**It rolls nothing, charges nothing, and writes nothing to the story.** It is bookkeeping, not an attempt. If picking the lock should be uncertain, that's a roll; if you've already decided the knife is on the table now, that's a move.

You can't move yourself from here. Moving your own body out from under the camera would desynchronise the two — setting your camera on **World's** Map is how you travel, and it brings anyone with **Follow** along.

## Saved moves

The move you make most often is the one you'll least enjoy rebuilding. **Saved moves** are presets.

Type a name in *Save this move as* and press **Save**. It keeps the approach, resolution, stake, situational modifier and your attempt text — everything except the **target**, which belongs to this turn rather than to the preset. A saved move aimed at somebody would keep re-aiming itself at a person who left three scenes ago.

Once you have one, **Load a saved move** appears above it. Loading fills the composer in; it's yours immediately, and editing it afterwards doesn't touch the preset.

**Saving under a name you've already used replaces it.** That's the only way to edit a preset, and it's enough of one — remake the move the way you want and save it again. **Forget one…** deletes.

Presets are stored with the story, not with your account, because everything they name — your approaches, your resolutions, your stakes — is stored with the story too.

---

# Part 4: Story, Images, and Settings.

---

## Story

Two sides of one surface. A tab strip at the top switches between them:

**Journal** — the record of what has already happened.
**Threads** — what's pushing the story forward right now.

Reach a character's own journal from their profile (Part 1) instead of from here, and you land straight on it with no strip to switch — threads belong to the story as a whole, never to one character.

### Journal

The Journal is the record of what has happened — the things you want remembered after they've scrolled out of the AI's reach.

#### Story journal and character journals

At the top of the Journal is a selector. **Story journal** is the shared record: events that matter to the world. Below it is every character on your roster, each with a journal of their own — what happened to *them* specifically, from their side.

Switching between them changes the whole page.

#### Entries

**Add entry** writes a new one. You can type it yourself, or have it written for you and then edit — the Journal is deliberately a mix of manual and assisted, and neither is the "proper" way to use it.

Entries are listed newest-relevant-first with a count in the heading, so **Entries (7)** tells you how much is currently live.

**Merge all** condenses every active entry into one. Use it when a journal has accumulated a lot of small notes about the same stretch of story and you'd rather have one clean paragraph than nine fragments. The count in the button tells you how many will be folded together.

#### Archived

Below the live entries is a collapsed **Archived** section. Archiving takes an entry out of circulation without deleting it — it stops being fed into the story but stays readable. This is the right move for something that's resolved: the confrontation happened, it no longer needs to be in the AI's ear every beat, but you'd like to be able to look it up.

Keep the active list short. Everything in it is competing for the same space.

### Threads

A thread is a narrative driver — a quest, a debt, a secret, a rivalry, whatever's actively pushing on the story right now. Every thread answers the same five questions, whatever kind of thread it is:

- **Pressure** — why now? What made this live this month, not next.
- **Objective** — what would have to happen for this to be over?
- **Opposition** — what resists, and what does it actually *do* about it?
- **Cost** — what does pursuing this take out of the protagonist?
- **Consequence** — what's different afterwards, win or lose?

Picking a **Kind** — Errand, Mystery, Reckoning, Ascent, Bond, Debt, Concealment, Siege, Ruin, or Custom — doesn't add fields; it only re-words the hint on each of the five toward what that kind of story usually needs. Switch Kind mid-thread and you lose nothing you've already written.

Each thread also carries **Milestones**: the current beat, in one line, updated as it moves. A thread is otherwise inert on its own — nothing here auto-generates and nothing auto-resolves; the milestone changes when you say it does.

Only one thread can be **the active thread** — marked ★, set from a button on the thread's own profile. Its current milestone is the very first thing the Author's Note carries every turn: one line, the one thing that should happen next, ahead of where you are and who's with you. The thread's name, its kind, and its five answers are a separate matter — that's its **lorebook entry**, and it reaches the story only when the thread itself gets mentioned by name.

**+ New thread** starts one. Each carries a status — Locked, Active, or Done — and the list groups them the same way: **Waiting**, **Running**, and **Finished**. A story can go its whole length without touching this tab and lose nothing the Journal already gave it.

---

## Images

Images has three tabs across the top: **Studio**, **Presets**, and **Gallery**.

### Studio

Studio is where you build the vocabulary your image prompts are made of.

The core of it is **Prompt Fields** — named pieces of prompt text that you write once and reuse. A field might be a lighting setup, a rendering style, a costume, a recurring backdrop. **+ Add field** makes a new one, and the heading keeps a count.

The point is that you're building a library rather than retyping. Once a field exists, it can be applied to any image without you reconstructing it from memory each time, and changing the field changes everything that uses it.

If you're starting fresh, Studio will tell you so: *"No prompt fields yet. Add one to start building a library."* That's the first thing to do.

### Presets

Presets are saved combinations — the settings and fields that together make a particular *kind* of image. Aspect ratio, shape, and which fields are in play.

### Gallery

Everything that's been generated, browsable. Tapping through opens a single image with the actions that apply to it. Tap a portrait to see it full screen, where it also tells you the seed it was made with.

### Per-character image settings

A character's own images live on their profile, under **Images**, not here. That page holds their portraits and the prompt text specific to them — an **Always** field applied to every image of that character, and narrower fields for particular kinds of shot. Studio is the shared vocabulary; the profile is where one character's part of it gets written.

---

## Settings

Settings has six tabs: **World**, **Context**, **States**, **Rolls**, **Time**, and **System**.

### World

The rules of the place you're writing in — the shared setup that isn't attached to any one character.

**Opening location** — where a new story starts. Worth setting early, since it's the first answer to the "make a location" problem from Part 1.

**Species** — the kinds of people in your world. Defined once here so that two characters of the same kind read as the same kind.

**Relationship archetypes** — seeds for the Position field on a profile. Each is a piece of prose saying what a relationship *is*, plus a few sentences describing where two people might stand within it, cold to warm. They're a starting point you edit, not a category you're assigned to: the moment you change a word, the profile stops treating it as a chosen archetype and treats it as yours.

> **If you used an earlier version:** Factions used to be a tab here. It's gone — creating, naming and deleting a faction now happens on **Diplomacy** (Part 2), beside the standing and resources that made one worth looking at in the first place.

### Context

Two lorebook entries the engine writes for you and keeps up to date. Both are always-on and keyless, so they survive context pressure. Editing them by hand does nothing — the next change here overwrites them.

**Dramatis Personae** lists the cast who are **not** in the scene. Anyone present already has their full profile injected every generation, so listing them here would say the same thing twice, worse. You can limit it to characters near you, and exclude anyone individually.

**The World** is an outline of your places and the descriptions you wrote for them. This is worth knowing about: **nothing else injects a location's description.** A place's own lorebook entry carries only its Lore text, and only while you're standing in it. If you've written descriptions for your world and wondered why the AI seems unaware of them, this entry is the answer. You can cap how deep it goes and exclude places individually.

Both show you **what the model sees** — the actual text, live.

### States

The catalog described in Part 3. Every state in your world, grouped by whatever categories you've invented, each with its range, its bands, its resting band, its scope and its terminals.

### Rolls

**Resolutions** — your dice and outcome tables. **Stakes** — what outcomes cost and who pays. Both described in Part 3.

Separate from States because they answer a different question: a state is a number a character carries, and a resolution is how the world judges an attempt.

### Time

The vocabulary your clock and calendar run on. This is where you *define* it; watching it move day to day is the World tab's Time view (Part 2), and nudging it by an hour is available right there too, and on Scene.

**Tell the story the time** — the master switch, and it's off by default. The clock keeps running, schedules keep firing, and dated entries keep landing whether this is on or off; what it gates is only whether the current hour gets written into the Author's Note every turn. A story that's never mentioned the hour usually doesn't want it restated on a schedule.

**Time of day** — the band labels themselves ("morning," "the dead of night"), the only part of the clock the model is ever told. Delete every band and the story is never told the time at all, even with the switch above turned on.

**The week** — how many days you name is how long a week is. Leave the list empty for a world that counts days rather than naming them.

**The year** — each month carries its own length; an empty list means this world has no calendar date, which is an ordinary thing for a story to have.

**What moves the clock** — minutes added automatically after every story turn (0 turns it off, the default), and what hour a fresh story starts at.

**Reseed the calendar** replaces all of the above with what a new story ships with. Useful when a story was started on an older version and its calendar is a seed behind — it does not move the clock itself, only the names attached to it.

### System

The engine's own behaviour. This is the tab to open when something feels too busy, too slow, or too quiet.

**Auto thoughts** and **Hooks** — the global defaults for the two background updates described in Part 1. New characters inherit these; individual characters can override from their own profile.

**Cadence unit** — whether update intervals are counted in **generations** or in **tokens**. Generations is the simpler mental model: "every N turns." Tokens tracks how much text has actually been written, which suits you better if your turns vary a lot in length. Both are kept up to date internally, so switching between them doesn't lose your place.

**Context injection** — how much of your characters' records gets fed into the story, and how often. This is the master volume control. Turn it down when scenes feel crowded with reminders; turn it up when characters are drifting.

**Show field headers in context injection** — whether injected material is labelled by field name or runs as plain prose. Labels help the AI keep fields distinct; plain prose reads more naturally to it. Worth trying both.

**Show all characters** — whether lists show your whole roster or only who's relevant to where you are.

**Include in Memory** and **Lorebook entry** — how engine material is written into NovelAI's own systems, for the parts of it that should persist independently of the engine.

**Put it in the story** — controls whether certain engine output is written into your document directly rather than kept to the side.

#### Interface

**Open in a window** — full-screen panel or floating resizable window. Covered in Part 1; applies on next open.

**Reduce motion** — turns off animation throughout. Worth having on if animation bothers you or if you're on a device where it costs you smoothness.

---

## Death, and the way back

Worth knowing because it isn't obvious: a character who dies is not deleted.

They're marked inactive, whatever they were carrying drops in the room they died in, and their body moves to a hidden place called the **Graveyard**. They leave the Scene roster and the chat contacts, because they aren't in play — but the Graveyard is on the Map, under hidden places, and their profile is one tap from there. The **Active** switch on their own settings undoes all of it.

This is why a terminal is a death rather than a deletion. Stories change their minds.

---

*End of the guide.*
