# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/hiduplahzomb/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/hiduplahzomb/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
($500 total, $100 first place). The entry is a 30-second vertical Short:
KreekCraft goes hunting for Bigfoot in GTA 6, finds it, gets knocked flat,
and admits chat was right all along — then the clip pitches make.fun.

## The clip

- **Moment:** the Bigfoot encounter in KreekCraft's GTA 6 Day 2 livestream
  (official Twitch VOD), found and verified in this session: the creature
  is a unique in-game 3D model with glowing red eyes, the knockdown is on
  screen, and Kreek's punchline — "Chat. We actually found Bigfoot. I
  thought y'all were joking." — closes the arc.
- **Why this moment:** the first candidate (an alligator bet from the Day 1
  VOD) failed visual verification — no alligator appears on screen in the
  downloaded window, so the payoff was invisible. Bigfoot has the strongest
  verified visual: a full-body close-up that reads in under a second.
- **Structure (30.1s, 720x1280, 60fps):** cold-open Bigfoot close-up with
  hook text "HE FOUND BIGFOOT?!" (1.5s) → setup "today we're gonna be
  hunting the elusive monster known as Bigfoot" → "Let's go find ourselves
  a Bigfoot" → "That sounds like a Bigfoot" → "Oh my God, it's Bigfoot!" →
  "No freaking way!" → knockdown, "Oh, shoot. What just happened?" →
  punchline → 6s make.fun pitch end card ("Make clips like this with AI
  and earn money on make.fun", `make.fun/bounty/gta6-clipper-01`).
- **Captions:** animated word-highlight captions in English, timed from a
  fresh faster-whisper transcription of the source files. Zero profanity:
  the one profane line near the reveal ("What the fuck is that?") is cut
  out — the reveal segment starts after it ends.
- **Distinct from the ContentRewards edit** of the same moment: different
  cut (tighter, 8 parts, no repeated teaser), English text, no KreekCraft
  overlay, and the make.fun pitch ending that the other edit does not have.

The video is public on YouTube as a Short; its description carries the
bounty's line verbatim and play code `makefun-highland-salmon-parka`.

## What this repository does

`VIDEO.json` holds the video's address. `main.ts` copies it to
`/output/VIDEO.json` — that is all the program has to do. Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
