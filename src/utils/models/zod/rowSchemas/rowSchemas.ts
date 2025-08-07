import buildSchemasRecord from "@/utils/helpers/buildSchemaRecord";
import type { FetchingEntityKey } from "../../types/utils/entityKeys";
import * as rowSchemasNamespace from "../rowSchemas";

export const rowSchemas = buildSchemasRecord<
  FetchingEntityKey,
  "",
  "RowSchema"
>(rowSchemasNamespace, "", "RowSchema");
