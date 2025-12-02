import type {
  DisplayEntityKey,
  EntityKey,
} from "@/utils/models/types/utils/entityKeys.ts";
import type { DotAccess } from "@/utils/models/types/utils/Form&Filter";

import { type Role } from "../../types/utils/Form&Filter.ts";
import type { RouteConfig } from "../routeConfig.ts";
import {
  filterSelectorField,
  generateAuditFields,
} from "./filterReusableFields.ts";
import { formSelectorField } from "./formUtils.ts";

import type { addTypesObject } from "../../types/add/addTypesObject.ts";
import type { updateTypesObject } from "../../types/update/updateTypesObject.ts";
import { adminAudit } from "../admin/human-resources/Audit/adminAudit.ts";
import { receptionistAudit } from "../admin/human-resources/Audit/receptionistAudit.ts";

export const adminFilterSelectorField = <T extends EntityKey>(
  fieldKey: string,
  entity: T,
  entityObject: RouteConfig<T>,
) => filterSelectorField(fieldKey, entity, entityObject, "Admin");

export const admingenerateAuditFields = (creator: Role) => {
  switch (creator) {
    case "Admin":
      return generateAuditFields("Admin", adminAudit, "Admin");
    case "Receptionist":
      return generateAuditFields("Receptionist", receptionistAudit, "Admin");
    default:
      return undefined;
  }
};

export const adminFormSelectorField = <
  T extends DisplayEntityKey,
  B extends EntityKey,
>(
  label: string,
  fieldKey: DotAccess<addTypesObject[T] | updateTypesObject[T]>,
  entity: B,
  mode: "add" | "update" | "both",
  entityObject: RouteConfig<B>,
) => formSelectorField(label, fieldKey, entity, mode, entityObject, "Admin");

export const receptionistFilterSelectorField = <T extends EntityKey>(
  fieldKey: string,
  entity: T,
  entityObject: RouteConfig<T>,
) => filterSelectorField(fieldKey, entity, entityObject, "Receptionist");

export const receptionistFormSelectorField = <
  T extends EntityKey,
  B extends DisplayEntityKey,
>(
  label: string,
  fieldKey: DotAccess<addTypesObject[T] | updateTypesObject[T]>,
  entity: B,
  mode: "add" | "update" | "both",
  entityObject: RouteConfig<B>,
) =>
  formSelectorField(
    label,
    fieldKey,
    entity,
    mode,
    entityObject,
    "Receptionist",
  );
