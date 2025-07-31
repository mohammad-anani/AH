import type { FormKey } from "../../types/utils/Form&Filter";

export const departmentForm: FormKey<"Department">[] = [
  ["Name", "Name", "string", "both"],
  ["Phone", "Phone", "phone", "both"],
];
