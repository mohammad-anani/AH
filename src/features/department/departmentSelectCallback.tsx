import type { customFormProps, Setter } from "@/utils/models/types/util";
import DepartmentSelect from "./DepartmentSelect";

export const DepartmentSelectCallBack: customFormProps = [
  ({ field, onChange, isSubmitting }) => (
    <DepartmentSelect
      setDepartmentID={onChange as Setter<number>}
      departmentID={field as number}
      isDisabled={isSubmitting}
    />
  ),
  "number",
];
