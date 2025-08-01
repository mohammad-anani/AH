// TestOrderFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { datetimeField } from "../reusableFields";
import { adminFields } from "../human-resources";
import { adminSelectorField } from "../adminRoleUtil";
import { appointmentFields } from "../appointment";

export const testOrderFields: FilterKey[] = [
  adminSelectorField("AppointmentID", "Appointment", appointmentFields),

  adminSelectorField("AdminID", "Admin", adminFields),
  datetimeField("OrderAt"),
];
