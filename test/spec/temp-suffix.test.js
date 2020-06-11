var assert = require('assert');

var tempSuffix = require('../..');

describe('temp-suffix', function () {
  it('should add a suffix', function () {
    var tempFilename = tempSuffix(__filename);
    assert.equal(tempFilename[__filename.length], '-');
    var suffix = tempFilename.slice(__filename.length + 1);
    assert.ok(suffix.length > 0);
  });

  it('should generate only a suffix', function () {
    var suffix = tempSuffix();
    assert.ok(suffix.length > 0);
  });
});
