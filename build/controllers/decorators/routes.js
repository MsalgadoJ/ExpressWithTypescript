"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.post = exports.del = exports.put = exports.get = exports.routeBinder = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.routeBinder = routeBinder;
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.del);
exports.post = routeBinder(Methods_1.Methods.post);
exports.patch = routeBinder(Methods_1.Methods.patch);
