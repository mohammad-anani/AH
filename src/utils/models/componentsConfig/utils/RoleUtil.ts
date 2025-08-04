import type { EntityKey } from "@/utils/models/types/utils/entityKeys.ts";
import type {
  DotAccess,
  FilterKey,
} from "@/utils/models/types/utils/Form&Filter";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import type { RowTemplate } from "../routeConfig.ts";

import {
  filterSelectorField,
  type Role,
  generateAuditFields,
  formSelectorField,
} from "./reusableFields.ts";

import type { typesObject } from "../../types/normal/typesObject.ts";
import { adminAudit } from "../admin/entities/human-resources/Audit/adminAudit.ts";
import { receptionistAudit } from "../admin/entities/human-resources/Audit/receptionistAudit.ts";

// ─── Admin ─────────────────────────────────────

export const adminFilterSelectorField = (
  fieldKey: string,
  entity: EntityKey,
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
) =>
  filterSelectorField(
    fieldKey,
    entity,
    filterFields,
    selectorConfig,
    rowTemplate,
    dataFields,
    "Admin",
  );

export const adminFormSelectorField = <T extends EntityKey>(
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
  entity: EntityKey,
  mode: "add" | "update" | "both",
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
) =>
  formSelectorField(
    label,
    fieldKey,
    entity,
    mode,
    filterFields,
    selectorConfig,
    rowTemplate,
    dataFields,
    "Admin",
  );

// ─── Receptionist ──────────────────────────────

export const receptionistFilterSelectorField = (
  fieldKey: string,
  entity: EntityKey,
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
) =>
  filterSelectorField(
    fieldKey,
    entity,
    filterFields,
    selectorConfig,
    rowTemplate,
    dataFields,
    "Receptionist",
  );

export const receptionistFormSelectorField = <T extends EntityKey>(
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
  entity: EntityKey,
  mode: "add" | "update" | "both",
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
) =>
  formSelectorField(
    label,
    fieldKey,
    entity,
    mode,
    filterFields,
    selectorConfig,
    rowTemplate,
    dataFields,
    "Receptionist",
  );

// ─── Audit Generator ──────────────────────────

export const admingenerateAuditFields = (creator: Role) => {
  const audit = creator === "Admin" ? adminAudit : receptionistAudit;

  return generateAuditFields(
    creator,
    audit.filterFields,
    audit.selectorConfig as SelectorConfig<EntityKey>,
    audit.rowTemplate as RowTemplate<EntityKey>,
    audit.dataFields as DataFields<EntityKey>,
    "Admin", // You mentioned this being fixed; leave it if intentional.
  );
};
