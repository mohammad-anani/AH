import type { EntityKey } from "@/utils/models/types/utils/entityKeys.ts";
import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import type { RowTemplate } from "../../routeConfig";

import {
  selectorField,
  type Role,
  generateAuditFields,
} from "./reusableFields";
import { adminAudit } from "../entities/human-resources/Audit/adminAudit.ts";
import { receptionistAudit } from "../entities/human-resources/Audit/receptionistAudit.ts";

export const adminSelectorField = (
  fieldKey: string,
  entity: EntityKey,
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
) =>
  selectorField(
    fieldKey,
    entity,
    filterFields,
    selectorConfig,
    rowTemplate,
    dataFields,
    "Admin",
  );

export const admingenerateAuditFields = (creator: Role) => {
  const config =
    creator === "Admin"
      ? {
          filterFields: adminAudit["filterFields"],
          selectorConfig: adminAudit["selectorConfig"],
          rowTemplate: adminAudit["rowTemplate"],
          dataFields: adminAudit["dataFields"],
        }
      : {
          filterFields: receptionistAudit["filterFields"],
          selectorConfig: receptionistAudit["selectorConfig"],
          rowTemplate: receptionistAudit["rowTemplate"],
          dataFields: receptionistAudit["dataFields"],
        };

  return generateAuditFields(
    creator,
    config.filterFields,
    config.selectorConfig,
    config.rowTemplate,
    config.dataFields,
    "Admin",
  );
};
