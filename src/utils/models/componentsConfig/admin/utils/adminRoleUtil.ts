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

export const adminSelectorField = <T extends EntityKey>(
  fieldKey: string,
  entity: EntityKey,
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<T>,
  rowTemplate: RowTemplate<T>,
  dataFields: DataFields<T>,
) =>
  selectorField(
    fieldKey,
    entity,
    filterFields,
    selectorConfig as SelectorConfig<EntityKey>,
    rowTemplate as RowTemplate<EntityKey>,
    dataFields as DataFields<EntityKey>,
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
    config.selectorConfig as SelectorConfig<EntityKey>,
    config.rowTemplate as RowTemplate<EntityKey>,
    config.dataFields as DataFields<EntityKey>,
    "Admin",
  );
};
