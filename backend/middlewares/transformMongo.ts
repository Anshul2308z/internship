import { Request, Response, NextFunction } from "express";

export default function transformMongoDoc(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json;

  res.json = function (data: any) {
    const transform = (doc: any) => {
      if (!doc) return doc;

      if (doc._id) {
        doc.id = doc._id.toString();
        delete doc._id;
      }

      return doc;
    };

    if (Array.isArray(data)) {
      data = data.map(transform);
    } else {
      data = transform(data);
    }

    return originalJson.call(this, data);
  };

  next();
}