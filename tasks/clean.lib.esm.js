#! /usr/bin/env node
let del = require('node-delete');
del(['./lib/esm/*.js', './lib/esm/*.map', './lib/esm/*.d.ts'], () => true);