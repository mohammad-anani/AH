import type { EntityKey } from "../../types/utils/entityKeys";
import type { FilterKey } from "../../types/utils/Form&Filter";
import type { DataFields } from "../../types/utils/routeTypes";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import { dataFields } from "../dataFields/dataFields";
import type { RowTemplate } from "../routeConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { selectorConfig } from "../selectorConfig/selectorConfig";
import {
  employeeFields,
  personFields,
  receptionistFields,
} from "./human-resources";
import {
  selectorField,
  type Role,
  generateAuditFields,
} from "./reusableFields";

export const adminSelectorField = (
  fieldKey: string,
  entity: EntityKey,
  filterFields: FilterKey[],
) =>
  selectorField(
    fieldKey,
    entity,
    filterFields,
    selectorConfig[entity] as SelectorConfig<EntityKey>,
    rowTemplates[entity] as RowTemplate<EntityKey>,
    dataFields[entity] as DataFields<EntityKey>,
    "Admin",
  );

export const admingenerateAuditFields = (creator: Role) =>
  generateAuditFields(
    creator,
    creator === "Admin"
      ? [...personFields, ...employeeFields]
      : receptionistFields,
    selectorConfig[creator] as SelectorConfig<EntityKey>,
    rowTemplates[creator] as RowTemplate<EntityKey>,
    dataFields[creator] as DataFields<EntityKey>,
    "Admin",
  );
