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

const inputMap = {
  number: NumberInput,
  string: StringInput,
  phone: PhoneInput,
  array: ArrayInput,
} as const;

export function Form() {
  const { fields } = useListContext();

  const renderField = (field: Key) => {
    const [key, type, trueLabel, falseLabel] = field;
    const label = generateLabel(key) + ":";
    const commonProps = { key, fieldKey: key, label };

    if (isTemporalType(type ?? "")) {
      return (
        <TemporalInput
          {...commonProps}
          type={type as "date" | "datetime" | "time"}
        />
      );
    }

    if (type === "boolean") {
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
