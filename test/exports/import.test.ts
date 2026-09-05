import assert from 'assert';
import tempSuffix from 'temp-suffix';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof tempSuffix, 'function');
  });
});
