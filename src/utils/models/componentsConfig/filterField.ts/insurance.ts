// InsuranceFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  numberField,
  booleanField,
  dateField,
} from "./reusableFields";
import { admingenerateAuditFields } from "./adminRoleUtil";

export const insuranceFields: FilterKey[] = [
  stringField("ProviderName"),
  numberField("Coverage"),
  booleanField("isActive", ["Active", "Inactive"]),
  dateField("ExpirationDate"),
  ...admingenerateAuditFields("Receptionist"),
];
