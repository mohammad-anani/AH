import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import * as schemasNamespace from ".";
import type { EntityKey } from "../../types/utils/entityKeys";

export const schemas = buildSchemasRecord<EntityKey, "Update", "Schema">(
  schemasNamespace,
  "Update",
  "Schema",
);
