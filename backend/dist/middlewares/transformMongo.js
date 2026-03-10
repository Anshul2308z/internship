"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformMongoDoc;
function transformMongoDoc(req, res, next) {
    const originalJson = res.json;
    res.json = function (data) {
        const transform = (doc) => {
            if (!doc)
                return doc;
            if (doc._id) {
                doc.id = doc._id.toString();
                delete doc._id;
            }
            return doc;
        };
        if (Array.isArray(data)) {
            data = data.map(transform);
        }
        else {
            data = transform(data);
        }
        return originalJson.call(this, data);
    };
    next();
}
