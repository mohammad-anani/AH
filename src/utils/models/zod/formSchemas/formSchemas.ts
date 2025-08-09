import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { EntityKey } from "../../types/utils/entityKeys.ts";
import * as schemasNamespace from "./index.ts";

export const schemas = buildSchemasRecord<EntityKey, "Form", "Schema">(
  schemasNamespace,
  "Form",
  "Schema",
);
