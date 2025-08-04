import type { EntityKey } from "@/utils/models/types/utils/entityKeys.ts";
import type { DotAccess } from "@/utils/models/types/utils/Form&Filter";

import type { RouteConfig } from "../routeConfig.ts";
import {
  filterSelectorField,
  generateAuditFields,
} from "./filterReusableFields.ts";
import { type Role } from "../../types/utils/Form&Filter.ts";
import { formSelectorField } from "./formUtils.ts";

import type { typesObject } from "../../types/normal/typesObject.ts";
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
  T extends EntityKey,
  B extends EntityKey,
>(
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
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
  B extends EntityKey,
>(
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
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
