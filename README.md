# Character Engine

Character Engine (CE) is a story-companion toolkit for NovelAI. It adds a world map, character and location profiles, a worldbuilding assistant, a private journal, in-character texting with your cast, and AI image generation — all layered on top of your existing stories.

It comes in two parts, and you can use either one on its own or both together:

- **The Engine** — a script you add inside NovelAI itself. Works everywhere, no browser extension required.
- **The Bridge + HUD** — a companion userscript (needs Violentmonkey or Tampermonkey) that adds a floating panel with richer visuals: a real map you can drag around, character portraits, image galleries, and more themes.
- <https://greasyfork.org/en/scripts/587717-character-engine-bridge-hud-v2-29-0/post-install>

If you only install the Engine, you'll get a row of toolbar buttons inside NovelAI. If you also install the Bridge, you'll get a floating widget you can pop open on top of your story. You can run both at once — see [Switching Modes](#switching-modes) below.

---

## Table of Contents
- [The Map & Teleporting](#the-map--teleporting)
- [Character & Location Profiles (Inspect)](#character--location-profiles-inspect)
- [The Roster](#the-roster)
- [The World-Build Wizard](#the-world-build-wizard)
- [The Journal](#the-journal)
- [Character Chat](#character-chat)
- [🎨 Setting Up Image Generation Presets](#-setting-up-image-generation-presets)
- [Themes](#themes)
- [Switching Modes](#switching-modes)

---

## The Map & Teleporting

**Where to find it:** Toolbar button **Map**, or the Bridge widget's compass icon.

See your world laid out as connected locations. Tap a node to select it, then:
- **Inspect** — opens that location's full profile (see below).
- **Teleport** — silently move your character there without generating any story text. Handy for repositioning without narrating a whole journey.

## Character & Location Profiles (Inspect)

**Where to find it:** Toolbar button **Inspect**, tapping a character's portrait, or the Map's Inspect button on a location.

Every character and location has a profile sheet:
- **Characters** show their current status, image gallery, and relationship/drama notes.
- **Locations** show who and what is currently present, their lorebook description, and their own image gallery.

You can jump straight to editing a character or location from here.

## The Roster

**Where to find it:** Toolbar button **Roster**.

A grid view of every character you've created, so you can quickly find and open anyone's profile without hunting through the map.

## The World-Build Wizard

**Where to find it:** Toolbar button **Wizard**, or the Bridge widget's ⭐ icon.

A chat-based assistant for building out your world — characters, locations, species, factions, and more — through natural conversation rather than filling out forms one field at a time. It's also where **image generation presets** live; see the dedicated section below.

## The Journal

**Where to find it:** Toolbar button **Journal**.

A private, in-character journal for your player character, separate from the main story text — good for tracking personal thoughts, secrets, or a running diary that doesn't need to appear in the narrative itself.

## Character Chat

**Where to find it:** Toolbar button **Chat**.

Step out of the main story and text back-and-forth with a character who's present in the scene, the way you'd message a friend — from the point of view of whichever character you're playing. Chats support:
- **Photos** — either side can send a picture as part of the conversation.
- **Avatars** — the character's portrait appears alongside their messages.
- **Fresh thoughts** — an optional setting that refreshes the character's inner state after each reply, so their responses stay grounded in how they're currently feeling.

---

## 🎨 Setting Up Image Generation Presets

This is one of the most useful screens in Character Engine, but it's a few taps deep, so here's exactly how to get there. **(Requires the Bridge.)**

1. Open the floating HUD by tapping its toggle button.
2. In the widget's bottom toolbar, tap the **gear/Settings** icon.
3. A dropdown appears — tap **Image Generation**.
4. This opens the World-Build Studio. In the left-hand rail, click the **Setup** tab.

That Setup tab is your image generation control center. It has two parts:

**Default Generation Settings** — pick a default image size (a few ready-made ratio/resolution presets), plus Scale and Steps sliders. These apply to every image you generate unless you override them.

**Image Fields** — your own library of reusable prompt snippets. Each field has:
- A name (so you can find it again),
- A base prompt fragment (what to add to the image description),
- An optional "undesired" fragment (things to avoid),
- A weight, and
- An on/off toggle.

Build up a handful of fields for things you use often — a particular art style, a lighting mood, a recurring visual motif — and toggle any combination of them on before generating a portrait or scene image. They stack together, so you can mix and match instead of writing the same prompt text over and over.

## Themes

**Where to find it:** Bridge widget → gear/Settings icon.

The Bridge ships with several built-in visual themes (Cyberpunk, Runestone, Unicorn Barf, Witch's Hollow, Cherry Blossom, Ghost Light, and the default dark theme), plus a theme creator if you want to design your own color palette, fonts, and effects from scratch.

## Switching Modes

Character Engine can run in three modes:
- **Native** — toolbar buttons only, works with just the Engine script installed.
- **Bridge** — the floating widget only, works with just the Bridge userscript installed.
- **Both** — toolbar buttons *and* the floating widget, all at once.

If you've installed both scripts, you can freely switch between these modes from the Engine's settings without losing any of your data.
