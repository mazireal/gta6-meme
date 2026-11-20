# GTA 6 meme — make.fun gta6-meme-x-01 entry

A GTA 6 meme for make.fun's bounty "Post a GTA 6 meme on X".
The joke: GTA VI took 13 years and $2B; my AI agent built a game in one
weekend — and got paid for it on make.fun.

- `meme.png` — the meme picture (the X post's first picture)
- `POST.json` — the address of the X post
- `main.ts` — entry program: hands POST.json to the grader

Verify: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
