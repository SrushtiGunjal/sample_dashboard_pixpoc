#!/usr/bin/env node
/**
 * Simple test client that calls the local server endpoint
 * Usage: node test-client.js
 * It will try to load server/.env via dotenv if present.
 */

import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get directory name for ES module
const __dirname = dirname(fileURLToPath(import.meta.url));
// Load .env from same directory as this file
dotenv.config({ path: `${__dirname}/.env` });

const port = process.env.PORT || '3000';
const host = process.env.SERVER_HOST || `http://localhost:${port}`;
const url = `${host}/fb/client-business-id`;

async function main() {
  console.log('Calling', url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const text = await res.text();
      console.error('Server returned', res.status, text);
      process.exitCode = 2;
      return;
    }
    const data = await res.json();
    console.log('Response JSON:', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Request failed:', err);
    process.exitCode = 1;
  }
}

main();
