const assert = require('assert');
const tempSuffix = require('temp-suffix');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof tempSuffix, 'function');
  });
});
