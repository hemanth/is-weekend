'use strict';
var assert = require('assert');
var isWeekend = require('./');

it('should return a boolean value', function() {
  assert.strictEqual(typeof isWeekend('unicorns'), 'boolean');
});
