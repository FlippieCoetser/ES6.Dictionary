#! /usr/bin/env node
import del from './del.mjs'
del(['./src/*.js', './src/*.map', './src/*.d.ts']);
del(['./test/*.js', './test/*.map', './test/*.d.ts']);
