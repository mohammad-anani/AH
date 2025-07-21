import type { z } from "zod";
import type { rowSchemas } from "../schema/rowSchemasObject";

export type rowTypesObject = {
  [K in keyof typeof rowSchemas]: z.infer<(typeof rowSchemas)[K]>;
};
