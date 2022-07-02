import { Dictionary } from '../lib/dictionary.js'

let dictionary = new Dictionary();
dictionary.add('key','value stored in dictionary');
let value = dictionary.get('key');

console.log(value)