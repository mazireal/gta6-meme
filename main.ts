// Entry program for the make.fun gta6-meme-x-01 bounty.
//
// The entry itself is the X post named in POST.json. All this program does is
// hand that file to the grader: it reads POST.json from the repository and
// writes the identical bytes into the output directory. Standard library
// only, no network, no clock: every run writes the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourceFile = join(repoDir, 'POST.json');
const targetFile = join(outDir, 'POST.json');

try {
  mkdirSync(outDir, { recursive: true });
  const contents = readFileSync(sourceFile);
  // Fail fast on a malformed POST.json instead of handing the gate a broken
  // file: it must be a JSON object naming the post's address.
  const post = JSON.parse(contents.toString('utf8')) as { url?: unknown };
  if (typeof post.url !== 'string' || post.url.length === 0) {
    throw new Error('POST.json names no post address');
  }
  writeFileSync(targetFile, contents);
} catch (error) {
  console.error(`Could not hand POST.json to the output directory: ${(error as Error).message}`);
  process.exit(1);
}
