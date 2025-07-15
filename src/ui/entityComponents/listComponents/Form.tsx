import type { Key } from "@/utils/models/types";
import useListContext from "./context";
import {
  NumberInput,
  StringInput,
  PhoneInput,
  BooleanInput,
  TemporalInput,
  ArrayInput,
  UnsupportedInput,
} from "./form-inputs/index";
import { generateLabel, isTemporalType } from "./utils";
import SelectInput from "./form-inputs/SelectInput";
import MoneyInput from "./form-inputs/MoneyInput";

const inputMap = {
  number: NumberInput,
  string: StringInput,
  phone: PhoneInput,
  array: ArrayInput,
  money: MoneyInput,
  select: SelectInput,
} as const;

export function Form() {
  const { fields } = useListContext();
  console.log(fields);
  const renderField = (field: Key) => {
    const [key, type, data] = field;

    const label = generateLabel(key) + ":";
    const commonProps = { key, fieldKey: key, label, data };

    if (isTemporalType(type ?? "")) {
      return (
        <TemporalInput
          {...commonProps}
          type={type as "date" | "datetime" | "time"}
        />
      );
    }

    if (type === "boolean") {
      const [trueLabel, falseLabel] = data;

      return (
        <BooleanInput
          {...commonProps}
          trueLabel={trueLabel}
          falseLabel={falseLabel}
        />
      );
    }

    const InputComponent =
      inputMap[type as keyof typeof inputMap] || UnsupportedInput;
    return <InputComponent {...commonProps} />;
  };

  return (
    <div
      className={`grid max-h-[300px]! w-[330px] grid-cols-[1fr_1fr] gap-y-3 overflow-x-hidden ${
        fields.length > 10 ? "overflow-y-scroll" : ""
      } rounded-none! p-2 text-xs! *:w-full!`}
    >
      {fields.map(renderField)}
    </div>
  );
}
