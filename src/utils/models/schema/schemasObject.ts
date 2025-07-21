import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { EntityKey } from "../types/util";
import * as schemasNamespace from "./schemas";

export const schemas = buildSchemasRecord<EntityKey, "", "Schema">(
  schemasNamespace,
  "",
  "Schema",
);
