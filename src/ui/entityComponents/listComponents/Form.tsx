import type { customFilterProps, Key } from "@/utils/models/types/util";
import useListContext from "./context";
import {
  NumberInput,
  StringInput,
  PhoneInput,
  BooleanInput,
  TemporalInput,
  ArrayInput,
  UnsupportedInput,
  SelectorInput,
} from "./form-inputs/index";
import { generateLabel, isTemporalType } from "./utils";
import SelectInput from "./form-inputs/SelectInput";
import MoneyInput from "./form-inputs/MoneyInput";
import Controller from "@/ui/customComponents/Controller";

const inputMap = {
  number: NumberInput,
  string: StringInput,
  phone: PhoneInput,
  array: ArrayInput,
  money: MoneyInput,
  select: SelectInput,
  selector: SelectorInput,
} as const;

type inputTypes =
  | "number"
  | "string"
  | "phone"
  | "array"
  | "money"
  | "select"
  | "selector";

export function Form() {
  const { fields } = useListContext();

  const safeFields = Array.isArray(fields) ? fields : [];

  const renderField = (field: Key) => {
    const [key, type, data] = field;

    const label = generateLabel(key) + ":";
    const commonProps = {
      key,
      fieldKey: key,
      label,
      data: data,
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

    if (isTemporalType(type ?? "")) {
      return (
        <TemporalInput
          {...commonProps}
          type={type as "date" | "datetime" | "time"}
        />
      );
    }

    if (type === "boolean") {
      const [trueLabel, falseLabel] = data as [string, string];

      return (
        <BooleanInput
          {...commonProps}
          trueLabel={trueLabel}
          falseLabel={falseLabel}
        />
      );
    }

    const InputComponent = inputMap[type as inputTypes] || UnsupportedInput;
    return <InputComponent {...commonProps} />;
  };

  return (
    <div
      className={`grid max-h-[300px]! w-[330px] grid-cols-[1fr_1fr] gap-y-3 overflow-x-hidden ${
        safeFields.length > 10 ? "overflow-y-scroll" : ""
      } rounded-none! p-2 text-xs! *:w-full!`}
    >
      {safeFields.map(renderField)}
    </div>
  );
}
