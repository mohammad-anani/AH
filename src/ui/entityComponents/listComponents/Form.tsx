import type {
  customFilterProps,
  DataTypes,
  FilterKey,
} from "@/utils/models/types/utils/Form&Filter";
import useListContext from "./context";

import { generateLabel } from "./utils";

import Controller from "@/ui/customComponents/Controller";
import UnsupportedInput from "@/ui/form-inputs/UnsupportedInput";
import { inputMap } from "@/utils/models/inputMap";

export function Form({ isNestedFilter = false }: { isNestedFilter?: boolean }) {
  const { fields } = useListContext();

  const safeFields = Array.isArray(fields) ? fields : [];

  const renderField = (field: FilterKey) => {
    const [key, type, data] = field;

    const label = generateLabel(key) + ":";
    const commonProps = {
      fieldKey: key,
      label,
      data: data || type,
    };

    if (type === "custom") {
      const [element] = data as customFilterProps;

      if (typeof element !== "function")
        return <UnsupportedInput {...commonProps} />;

      const Input = element;

      return (
        <>
          <label htmlFor={key}>{generateLabel(label)}</label>
          <Controller
            name={key}
            renderField={({ field }) => {
              return <Input field={field.value} onChange={field.onChange} />;
            }}
          />
        </>
      );
    }

    if (type === "selector" && isNestedFilter) return null;

    const InputComponent = inputMap[type as DataTypes] || UnsupportedInput;
    return <InputComponent {...commonProps} />;
  };

  return (
    <div
      className={`grid max-h-[300px]! w-[330px] grid-cols-[auto_1fr] gap-x-2 gap-y-3 overflow-x-hidden ${
        safeFields.length > 10 ? "overflow-y-scroll" : ""
      } rounded-none! p-2 text-xs! *:w-full!`}
    >
      {safeFields.map(renderField)}
    </div>
  );
}
