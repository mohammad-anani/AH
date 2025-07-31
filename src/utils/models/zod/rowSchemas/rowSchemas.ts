import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { EntityKey } from "../../types/utils/entityKeys";
import * as rowSchemasNamespace from "../rowSchemas";

export const rowSchemas = buildSchemasRecord<EntityKey, "", "RowSchema">(
  rowSchemasNamespace,
  "",
  "RowSchema",
);
