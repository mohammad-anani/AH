import type {
  AllEntityKeys,
  customFormProps,
  DataTypes,
  FormKey,
} from "@/utils/models/types/util";

import Controller from "@/ui/customComponents/Controller";
import { UnsupportedInput } from "@/ui/form-inputs";
import { generateLabel } from "./listComponents/utils";
import { inputMap } from "../../utils/models/inputMap";

//make formFields

type FormProps<T extends AllEntityKeys> = {
  fields: FormKey<T>[];
  mode: "add" | "update";
};

export default function Form<T extends AllEntityKeys>({
  fields,
  mode,
}: FormProps<T>) {
  const safeFields = Array.isArray(fields) ? fields : [];

  const isAdd = mode === "add";

  const selectedFields = isAdd
    ? safeFields.filter(([, , , mode]) => mode !== "update")
    : safeFields.filter(([, , , mode]) => mode !== "add");

  const renderField = (field: FormKey<T>) => {
    const [label, key, type, , data] = field;

    const commonProps = {
      fieldKey: key,
      label: label + ":",
      data: data || type,
    };

    if (type === "custom") {
      const [element] = data as customFormProps;

      if (typeof element !== "function")
        return <UnsupportedInput {...commonProps} />;

      const Input = element;

      return (
        <>
          <label htmlFor={String(key)}>{generateLabel(label) + ":"}</label>
          <Controller
            name={String(key)}
            renderField={({ field }) => {
              return <Input field={field.value} onChange={field.onChange} />;
            }}
          />
        </>
      );
    }

    const InputComponent = inputMap[type as DataTypes] || UnsupportedInput;
    return <InputComponent {...commonProps} />;
  };

  return <>{selectedFields.map(renderField)}</>;
}
