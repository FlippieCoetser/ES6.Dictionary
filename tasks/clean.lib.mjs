#! /usr/bin/env node
import del from './del.mjs'
del(['./lib/*.js', './lib/*.map', './lib/*.d.ts']);
