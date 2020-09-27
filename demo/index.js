import { Dictionary } from '../lib/esm/Index.js'

let dictionary = new Dictionary();
dictionary.add('key','value');
let value = dictionary.get('key');

console.log(value)