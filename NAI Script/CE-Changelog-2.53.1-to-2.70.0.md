# Character Engine — What's New (since v2.53.1)

## ✨ New

- **Character Chat portraits now change with emotion.** Contacts can show a different picture per emotion (happy, irritated, tired, etc.) instead of one static avatar, pulled automatically from whatever the character says in each message. Falls back to their regular avatar if you haven't set up emotion-specific portraits.
- **Chat summaries.** A new "Summarize" option in the chat manager gives you an editable, AI-written summary of a conversation — without ending or closing the chat.
- **No more hitting Enter after a reply.** Character Chat now leaves a ready line for you right after a character's message, so you can start typing your reply immediately.
- **Token-based pacing option.** Dynamic story events can now be paced by how much text has actually been generated, as an alternative to counting AI turns — useful if your generations vary a lot in length.
- **Character lorebook entries are now organized into their own category**, so they're easier to find alongside factions, species, and other entity types instead of sitting uncategorized.

## 🛠️ Fixed

- **Character Chat replies going silent.** The big one — characters would sometimes not reply at all, especially a few messages into a conversation, often needing two or three presses of Send to get an answer. This is now fixed at the root cause and should no longer happen. The same fix has been applied to Live Wizard Chat, which had the identical issue.
- **Occasional garbled or broken-looking replies** where a character's message could show stray formatting or leftover scaffolding instead of clean text.
- **The "thinking" indicator flashing incorrectly** during image generation in Character Chat.
- **Live Wizard Chat following instructions more reliably** — it was occasionally slipping out of the Wizard's own voice or losing track of formatting instructions as a conversation went on.
- **Characters' private "thoughts"** (the internal reactions that shape their next reply) now generate more focused and on-topic, after removing an unrelated style instruction that was competing for the model's attention.

---
*Covers Character Engine v2.53.1 → v2.70.0.*
