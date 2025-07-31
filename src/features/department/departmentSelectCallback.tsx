import type { customFormProps } from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
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
