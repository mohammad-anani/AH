// typesObject.ts
import type { z } from "zod";
import type { schemas } from "../schema/schemasObject";

export type typesObject = {
  [K in keyof typeof schemas]: z.infer<(typeof schemas)[K]>;
};
