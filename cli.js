#!/usr/bin/env node

'use strict';

var isWeekend = require("./")();

console.log(isWeekend ? 'Yay! It\'s weekend!' : 'Nope, not yet :(');
