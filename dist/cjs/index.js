// Adapted from https://github.com/npm/write-file-atomic
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return tempSuffix;
    }
});
var _imurmurhash = /*#__PURE__*/ _interop_require_default(require("imurmurhash"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// if we run inside of a worker_thread, `process.pid` is not unique
/* istanbul ignore next */ var threadId = function getId() {
    try {
        var workerThreads = require("worker_threads");
        /// if we are in main thread, this is set to `0`
        return workerThreads.threadId;
    } catch (_e) {
        // worker_threads are not available, fallback to 0
        return 0;
    }
}();
var invocations = 0;
function tempSuffix(prefix) {
    var suffix = (0, _imurmurhash.default)(prefix || "").hash(String(process.pid)).hash(String(threadId)).hash(String(++invocations)).result();
    return prefix === undefined ? "".concat(suffix) : "".concat(prefix, "-").concat(suffix);
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }