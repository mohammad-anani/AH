import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { EntityKey } from "../types/util";
import * as addingSchemasNamespace from "./addingSchemas";

export const addingSchemas = buildSchemasRecord<EntityKey, "Add", "Schema">(
  addingSchemasNamespace,
  "Add",
  "Schema",
);
