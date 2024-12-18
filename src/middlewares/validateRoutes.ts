import { Request, Response, NextFunction } from "express";
import { Schema } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const wrapValidation = (fn: Function, schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (schema) {
      try {
        let data = {};

        const requestMembers = ["body", "params", "query"];

        for (const member of requestMembers) {
          data = { ...data, ...req[member] };
        }

        await schema.parseAsync(data);
        await fn(req, res, next);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.log("Route Validation Error ======> \n", err.errors);
        next(err);
      }
    } else {
      await fn(req, res, next);
    }
  };
};

export default wrapValidation;
