'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');
var md = require('markdown-it')({
  html: true,
}).use(require('../'));

describe('markdown-it-aligned-table', function() {
  generate(path.join(__dirname, 'fixtures/aligned-table.txt'), md);
});
