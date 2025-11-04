#!/usr/bin/env node
/*
 * Interactive helper to write server/.env
 * Usage: node set-env.js
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

async function main() {
  const envPath = path.resolve(process.cwd(), '.env');
  console.log('This will create or overwrite server/.env in', process.cwd());

  const token = await question('FB_SYSTEM_USER_TOKEN (paste your system user token): ');
  const apiVersionDefault = 'v24.0';
  const apiVersion = (await question(`FB_API_VERSION [${apiVersionDefault}]: `)) || apiVersionDefault;
  const portDefault = '3000';
  const port = (await question(`PORT [${portDefault}]: `)) || portDefault;

  const content = `FB_SYSTEM_USER_TOKEN=${token.trim()}\nFB_API_VERSION=${apiVersion.trim()}\nPORT=${port.trim()}\n`;

  fs.writeFileSync(envPath, content, { encoding: 'utf8', flag: 'w' });
  console.log('Wrote', envPath);
  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
