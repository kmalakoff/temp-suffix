const assert = require('assert');

const tempSuffix = require('temp-suffix');

describe('temp-suffix', () => {
  it('should add a suffix', () => {
    const tempFilename = tempSuffix(__filename);
    assert.equal(tempFilename[__filename.length], '-');
    const suffix = tempFilename.slice(__filename.length + 1);
    assert.ok(suffix.length > 0);
  });

  it('should generate only a suffix', () => {
    const suffix = tempSuffix();
    assert.ok(suffix.length > 0);
  });
});
