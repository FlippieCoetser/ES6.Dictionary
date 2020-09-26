#! /usr/bin/env node
let del = require('node-delete');
del(['./test/*.js', './test/*.map', './test/*.d.ts'], () => true);
del(['./src/*.js', './src/*.map', './src/*.d.ts'], () => true);