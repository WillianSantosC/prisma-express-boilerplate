import { z } from "zod";

export const userSchema = {
  create: z.object({}),

  update: z.object({}),

  retrieve: z.object({}),

  delete: z.object({}),
};
