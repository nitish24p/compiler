#!/usr/bin/env babel-node

const path = require('path');
const fileParser = require('./lib/file-parser');
const scriptParser = require('./lib/script-parser');

const inputFilePath = path.join('.', 'input.kia');

const { scripts, styles, views } = fileParser.parseFile(inputFilePath);
scriptParser.parseScript(scripts);
