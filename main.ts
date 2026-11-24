import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
writeFileSync(join(output, 'entry.txt'), 'A');
