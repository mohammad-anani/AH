// TestOrderFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { selectorField, datetimeField } from "../reusableFields";

export const testOrderFields: FilterKey[] = [
  selectorField("AppointmentID", "Appointment"),
  selectorField("TestTypeID", "TestType"),
  datetimeField("OrderAt"),
];
