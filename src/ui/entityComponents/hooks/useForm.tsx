import { UnsupportedInput } from "@/ui/form-inputs";
import { inputMap } from "@/utils/models/inputMap";
import type {
  FormKey,
  customFormProps,
  DataTypes,
} from "@/utils/models/types/utils/Form&Filter";
import { generateLabel } from "../listComponents/utils";
import Controller from "@/ui/customComponents/Controller";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useLocation } from "react-router-dom";

export default function useForm<T extends EntityKey>(
  fields: FormKey<T>[],
  mode: "add" | "update",
) {
  const location = useLocation();
  const state = location.state;
  const safeFields = Array.isArray(fields) ? fields : [];

  const isAdd = mode === "add";

  const selectedFields = isAdd
    ? safeFields.filter(([, , , mode]) => mode !== "update")
    : safeFields.filter(([, , , mode]) => mode !== "add");

  const renderField = (field: FormKey<T>) => {
    const [label, key, type, , data] = field;

    console.log(state);
    const commonProps = {
      fieldKey: key,
      label: label + ":",
      data: data || type,
      disabled: Object.keys(state).includes(key),
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

  return { selectedFields, renderField };
}
