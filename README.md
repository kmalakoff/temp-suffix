## temp-suffix

Adds a process-, worker-thread-, and invocation-derived 32-bit hash suffix to a string for temporary names. Successive calls use different invocation inputs, but hash collisions are possible, so this is not a security or random identifier. Adapted from https://github.com/npm/write-file-atomic

```bash
npm install temp-suffix
```

```
var tempSuffix = require('temp-suffix');

var tempFilename = tempSuffix(__filename);
console.log(tempFilename); // __filename + '-' + [HASH SUFFIX]

var suffix = tempSuffix();
console.log(suffix); // [HASH SUFFIX]
```
