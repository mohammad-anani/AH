import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { EntityKey } from "../../types/utils/entityKeys.ts";
import * as schemasNamespace from "./services/index.ts";

export const schemas = buildSchemasRecord<EntityKey, "Form", "Schema">(
  schemasNamespace,
  "Form",
  "Schema",
);
