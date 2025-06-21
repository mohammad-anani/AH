import type { DataTypes } from "@/utils/models/types";
import useListContext from "./context";
import {
  NumberInput,
  StringInput,
  PhoneInput,
  BooleanInput,
  TemporalInput,
  ArrayInput,
  UnsupportedInput,
} from "./form-inputs";
import { generateLabel, isTemporalType } from "./utils";

export function Form() {
  const { fields } = useListContext();

  const renderField = (field: [string, DataTypes, string?, string?]) => {
    const [key, type, trueLabel, falseLabel] = field;
    const label = generateLabel(key) + ":";

    if (isTemporalType(type ?? "")) {
      return (
        <TemporalInput
          key={key}
          fieldKey={key}
          label={label}
          type={type as "date" | "datetime" | "time"}
        />
      );
    }

    switch (type) {
      case "number":
        return <NumberInput key={key} fieldKey={key} label={label} />;

      case "string":
        return <StringInput key={key} fieldKey={key} label={label} />;

      case "phone":
        return <PhoneInput key={key} fieldKey={key} label={label} />;

      case "boolean":
        return (
          <BooleanInput
            key={key}
            fieldKey={key}
            label={label}
            trueLabel={trueLabel}
            falseLabel={falseLabel}
          />
        );

      case "array":
        return <ArrayInput key={key} fieldKey={key} label={label} />;

      default:
        return <UnsupportedInput key={key} fieldKey={key} label={label} />;
    }
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
