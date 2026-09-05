import assert from 'assert';
import tempSuffix from 'temp-suffix';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof tempSuffix, 'function');
  });
});
