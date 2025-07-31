import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import { prefixFields } from "../util";
import { employeeForm } from "./employee";

export const doctorForm: FormKey<"Doctor">[] = [
  ...prefixFields<"Doctor", "Employee">("Employee", employeeForm),
  ["Specialization", "Specialization", "string", "both"],
];
