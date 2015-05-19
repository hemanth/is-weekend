'use strict';
module.exports = function() {
  return (new Date()).getDay() % 6 == 0;
};
