import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import type { FormKey } from "@/utils/models/types/utils/Form&Filter";

export const testTypeForm: FormKey<"TestType">[] = [
  ["Name", "Name", "string", "both"],
  ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
  ["Cost", "Cost", "money", "both"],
];
