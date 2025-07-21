import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { EntityKey } from "../types/util";
import * as rowSchemasNamespace from "./rowSchemas";

export const rowSchemas = buildSchemasRecord<EntityKey, "", "RowSchema">(
  rowSchemasNamespace,
  "",
  "RowSchema",
);

console.log(rowSchemas);
