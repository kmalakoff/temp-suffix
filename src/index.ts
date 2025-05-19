// Adapted from https://github.com/npm/write-file-atomic

import MurmurHash3 from 'imurmurhash';

// if we run inside of a worker_thread, `process.pid` is not unique
/* istanbul ignore next */
const threadId = (function getId() {
  try {
    const workerThreads = require('worker_threads');

    /// if we are in main thread, this is set to `0`
    return workerThreads.threadId;
  } catch (_e) {
    // worker_threads are not available, fallback to 0
    return 0;
  }
})();

let invocations = 0;
export default function tempSuffix(prefix?: string) {
  const suffix = MurmurHash3(prefix === undefined ? '' : prefix)
    .hash(String(process.pid))
    .hash(String(threadId))
    .hash(String(++invocations))
    .result();
  return prefix === undefined ? `${suffix}` : `${prefix}-${suffix}`;
}
