#!/usr/bin/env node
// Generates public/favicon.ico from public/logo.png using png-to-ico
// Run: npm run generate:favicon

const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const input = path.resolve(__dirname, '../public/logo.png');
const output = path.resolve(__dirname, '../public/favicon.ico');

if (!fs.existsSync(input)) {
  console.error('Input file public/logo.png not found. Please add your logo image to public/logo.png and try again.');
  process.exit(1);
}

pngToIco(input)
  .then(buf => fs.writeFileSync(output, buf))
  .then(() => console.log('favicon.ico generated at public/favicon.ico'))
  .catch(err => {
    console.error('Failed to generate favicon.ico:', err);
    process.exit(1);
  });
