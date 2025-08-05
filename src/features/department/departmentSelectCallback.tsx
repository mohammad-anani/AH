import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
import DepartmentSelect from "./DepartmentSelect";

export const DepartmentFormSelectCallBack: customFormProps = [
  ({ field, onChange, isSubmitting }) => (
    <DepartmentSelect
      setDepartmentID={onChange as Setter<number>}
      departmentID={field as number}
      isDisabled={isSubmitting}
    />
  ),
  "number",
];

export const DepartmentFilterSelectCallBack: customFilterProps = [
  ({ field, onChange }) => (
    <DepartmentSelect
      setDepartmentID={onChange as Setter<number>}
      departmentID={field as number}
    />
  ),
  "number",
];
