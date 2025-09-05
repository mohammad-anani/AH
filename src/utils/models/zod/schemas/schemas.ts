import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { FetchingEntityKey } from "../../types/utils/entityKeys.ts";
import * as schemasNamespace from "./index.ts";

export const schemas = buildSchemasRecord<FetchingEntityKey, "", "Schema">(
  schemasNamespace,
  "",
  "Schema",
);
