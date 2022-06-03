#!/usr/bin/env node
const { resolve, join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const srcDir = resolve(process.cwd(), 'src');
const versionFile = join(srcDir, 'version');

const previousVersion = readFileSync(versionFile, 'utf-8');

let [major, minor, patch] = previousVersion.trim().split('.');

patch = parseInt(patch) + 1;

const releaseVersion = [major, minor, patch].join('.');

writeFileSync(versionFile, releaseVersion, 'utf-8');

console.log('>> version upgrade from %s to %s.', previousVersion, releaseVersion);
