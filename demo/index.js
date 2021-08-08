import { Dictionary } from '../lib/Dictionary.js'

let dictionary = new Dictionary();
dictionary.add('key','value stored in dictionary');
let value = dictionary.get('key');

console.log(value)

import { Component } from '../lib/Component.js'
customElements.define('app-component', Component);