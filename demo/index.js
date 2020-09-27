import { Dictionary } from '../lib/esm/Dictionary.js'

let dictionary = new Dictionary();
dictionary.add('key','value');
let value = dictionary.get('key');

console.log(value)