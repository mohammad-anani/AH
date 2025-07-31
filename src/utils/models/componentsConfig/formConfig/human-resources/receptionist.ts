import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import { prefixFields } from "../util";
import { employeeForm } from "./employee";

export const receptionistForm: FormKey<"Receptionist">[] = [
  ...prefixFields<"Receptionist", "Employee">("Employee", employeeForm),
];
