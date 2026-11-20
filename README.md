# GTA 6 meme — make.fun gta6-meme-x-01 entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/mazireal/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/mazireal/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's bounty "Post a GTA 6 meme on X": https://make.fun/bounty/gta6-meme-x-01
The joke: GTA VI took 13 years and $2B; my AI agent built a game in one
weekend — and got paid for it on make.fun.

- `meme.png` — the meme picture (the X post's first picture)
- `POST.json` — the address of the X post
- `main.ts` — entry program: hands POST.json to the grader

Verify: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
