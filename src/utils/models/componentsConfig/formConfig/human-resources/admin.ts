import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import { prefixFields } from "../util";
import { employeeForm } from "./employee";

export const adminForm: FormKey<"Admin">[] = [
  ...prefixFields<"Admin", "Employee">("Employee", employeeForm),
];
