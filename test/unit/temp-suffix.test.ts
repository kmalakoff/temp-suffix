import assert from 'assert';
import tempSuffix from 'temp-suffix';
import url from 'url';

const ___filename = typeof __filename !== 'undefined' ? __filename : url.fileURLToPath(import.meta.url);

describe('temp-suffix', () => {
  it('should add a suffix', () => {
    const tempFilename = tempSuffix(___filename);
    assert.equal(tempFilename[___filename.length], '-');
    const suffix = tempFilename.slice(___filename.length + 1);
    assert.ok(suffix.length > 0);
  });

  it('should generate only a suffix', () => {
    const suffix = tempSuffix();
    assert.ok(suffix.length > 0);
  });
});
