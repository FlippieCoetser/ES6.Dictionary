#! /usr/bin/env node
let del = require('node-delete');
del(['./lib/cjs/*.js', './lib/cjs/*.map', './lib/cjs/*.d.ts'], () => true);