// DoctorFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { employeeFields } from "./employee";
import { stringField, generateAuditFields } from "../reusableFields";

export const doctorFields: FilterKey[] = [
  ...personFields,
  ...employeeFields,
  stringField("Specialization"),
  ...generateAuditFields("Admin"),
];
