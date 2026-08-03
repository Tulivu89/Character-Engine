# Character Engine — User Guide

IMPORTANT: To utilize image generation for illustrations, you must install the bridge script via violentmonkey.github.io or Tampermonkey. Once you have either browser extension, install the bridge script below.
https://greasyfork.org/en/scripts/587717-character-engine-bridge-hud-v2-41-1

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

Open **Map**, make one location, and put your characters in it. One room is enough to start.

---

## Getting in

Two ways in, and they land in the same place.

**The toolbar buttons.** Along NovelAI's toolbar you'll find one small icon per destination — a map, a group of people, a speech bubble, a book, a picture. Tap any of them and the engine opens directly to that destination. This is the everyday way in.

**Anywhere inside the engine.** Once you're in, the row of tabs across the top takes you anywhere else. You never have to close and reopen to change destinations.

### Full screen or window

By default the engine opens as a full-screen panel. That's the most comfortable way to work on a phone, but it does cover the story.

If you'd rather see both at once, go to **Settings → Interface** and turn on **Open in a window**. The engine then opens as a floating panel you can drag and resize, with your story visible beside it. Handy when you're writing and adjusting a character in the same breath.

The switch applies the *next* time you open the engine — it can't rebuild the container it's currently painted inside. Close it and reopen, and you're in the new mode. The setting is remembered across every story.

---

## The seven destinations

Across the top of the engine is a row of tabs. Six words and a gear.

**Map** — where everything is. Rooms, buildings, regions, and who's standing in them. This is also how you move: your camera is a location, and the story follows it.

**Scene** — where you are and who is here, right now, with you. The cast of the current moment.

**Chat** — talking to a character directly, outside the story. Not narration; conversation.

**Journal** — a manual or AI-assisted record of important events.

**Images** — pictures of your characters and places, and the settings that shape how they're generated.

**Wizard** — the guided builder. When you want to make something new and would rather be asked questions than face a blank form.

**⚙ (Settings)** — everything else. World rules, interface preferences, how much the engine injects and how often.

---

## Character profiles

A profile is one character's whole record in one place. You reach it by tapping their name — from Scene, from the Map, from anywhere they're listed.

### The top of the page

The character's **name**. Tap the name to open **Identity**, where the basics live: species, age, pronouns, the descriptive bones.

Beneath it, three small switches. These matter more than their size suggests.

#### Follow

Off by default. When it's on, this character goes where you go — move your camera to a new location and they move with you, automatically, every scene.

Turn it on for a travelling companion, a bodyguard, a dog. Turn it off when they should stay put; an innkeeper who follows you across the continent is a bug you created.

#### Dynamic / Static

Whether this character is treated as live cast or as a record on file. Dynamic characters are the ones the engine works on between your turns; Static ones sit quietly until you need them.

**That background work is a budget.** Everything the engine generates between turns is real time spent while you wait, so there are controls for it in **Settings**:

- **A cap on how many characters get updated per turn.** Present characters beyond the cap simply don't get processed that turn — they're queued and go first next turn rather than being dropped.
- **The update interval** — how often updates come round, measured either in generations or in tokens, whichever suits how you write.
- **Ranking**, so that when the cap bites, it bites the right people. Ranked characters fill the available slots first, in rank order; unranked ones take whatever's left. *(Note: the per-character priority control has not yet been ported to the new interface.)*

The short version: Dynamic for the people who matter this scene, Static for everyone else, and revisit it when a scene gets crowded.

#### Thoughts

Whether the engine generates a running read of what this character is thinking — what just happened to them as they saw it, how they feel about it, and what they want next. You'll see a 💭 notice when it refreshes.

This is also the update that moves two of the three pressure axes (see below), so turning it off doesn't just quieten a character — it stops **Pursuit** and **Position** from tracking.

#### Hooks on / Hooks off

Whether the engine tracks and escalates this character's **Hooks** — the long-running wants and grudges that build across the story. You'll see a 🎯 notice when one updates.

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
**Conditions** — states they're currently in: injured, drunk, disguised, in disgrace. These feed the story while they're active and stop when you clear them.
**Settings** — the per-character switches that don't fit anywhere else.

Each of these opens with a **← Profile** button at the top to bring you back.

---

# Part 2: Scene, Map, and Chat.

---

## Scene

Scene is where you are and who is with you. It's the destination you'll open most.

At the top, a picture of the current location if one has been generated. Beneath it, the **Location** section — where your camera is right now. Everything else on the page is derived from that: the engine works out who's present by looking at who is in this place.

This is why the location matters so much. Move your camera and the cast changes; if the cast looks wrong, the answer is almost always that somebody is in the wrong room rather than that the engine has lost track of them.

Two buttons:

**Refresh** — re-reads the scene. You shouldn't normally need it; it's there for when you've made changes elsewhere and want to see them reflected immediately.

**New character** — makes a character and drops you straight into their profile. This is the fastest path from "someone just walked in" to a usable record.

Tapping any character in the list opens their profile.

---

## Map

Map is where everything is, and how you move.

Your world is drawn as **nested circles** — a region containing settlements, a settlement containing buildings, a building containing rooms — each one sitting inside its parent. It's a shape that shows containment at a glance: you can see that the kitchen is in the inn, and the inn is in the town, without reading a single label.

### Getting around

The map is fully free-form. You can:

- **Drag** to pan anywhere.
- **Pinch** to zoom in and out — real two-finger pinch, not a stepped zoom.
- **Tap a circle** to zoom to it, which is usually faster than pinching your way down.

Zooming is anchored to the centre of what you're looking at, so pinching in doesn't drag you off toward a corner.

As you zoom, labels appear and disappear. The map shows the level you're focused on and its immediate neighbours rather than every name at once — zoom into a building and its rooms name themselves; zoom out and they get out of the way. Character names appear inside a circle when there's room for them at the current zoom, which means the map gets more informative the closer you look rather than more cluttered.

### Moving

Your camera is a location. Setting it somewhere is how you move the story — the scene follows, and any character with **Follow** turned on comes with you.

Tapping a place opens it, from where you can set your camera, look at what's inside, or edit the place itself.

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

# Part 3: Journal, Images, and Settings.

---

## Journal

The Journal is the record of what has happened — the things you want remembered after they've scrolled out of the AI's reach.

### Story journal and character journals

At the top of the Journal is a selector. **Story journal** is the shared record: events that matter to the world. Below it is every character on your roster, each with a journal of their own — what happened to *them* specifically, from their side.

Switching between them changes the whole page. A character journal is reachable the same way from their profile.

### Entries

**Add entry** writes a new one. You can type it yourself, or have it written for you and then edit — the Journal is deliberately a mix of manual and assisted, and neither is the "proper" way to use it.

Entries are listed newest-relevant-first with a count in the heading, so **Entries (7)** tells you how much is currently live.

**Merge all** condenses every active entry into one. Use it when a journal has accumulated a lot of small notes about the same stretch of story and you'd rather have one clean paragraph than nine fragments. The count in the button tells you how many will be folded together.

### Archived

Below the live entries is a collapsed **Archived** section. Archiving takes an entry out of circulation without deleting it — it stops being fed into the story but stays readable. This is the right move for a thread that has resolved: the confrontation happened, it no longer needs to be in the AI's ear every beat, but you'd like to be able to look it up.

Keep the active list short. Everything in it is competing for the same space.

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

Everything that's been generated, browsable. Tapping through opens a single image with the actions that apply to it.

### Per-character image settings

A character's own images live on their profile, under **Images**, not here. That page holds their portraits and the prompt text specific to them — an **Always** field applied to every image of that character, and narrower fields for particular kinds of shot. Studio is the shared vocabulary; the profile is where one character's part of it gets written.

---

## Settings

Settings has three tabs: **World**, **Factions**, and **System**.

### World

The rules of the place you're writing in — the shared setup that isn't attached to any one character.

**Opening location** — where a new story starts. Worth setting early, since it's the first answer to the "make a location" problem from Part 1.

**Conditions** are defined here too. A condition is a state a character can be in — injured, drunk, disguised, in disgrace — and it's defined once at the world level, then applied to individual characters from their profile. One list, one owner: if you want to change what "injured" means, you change it here and every character carrying it updates.

### Factions

Groups, and what they have. Factions hold resources that change as your story runs, and those values are tied to the story rather than to your account, so undoing story turns undoes faction changes with them.

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

*End of the guide.*
