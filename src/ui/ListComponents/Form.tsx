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
import {
  generateLabel,
  isTemporalType,
  getTemporalValue,
} from "./form-inputs/utils";

export function Form() {
  const { fields, filter } = useListContext();

  const renderField = (field: [string, string, string?, string?]) => {
    const [key, type, trueLabel, falseLabel] = field;
    const label = generateLabel(key);

    // Handle temporal types (date, datetime, time)
    if (isTemporalType(type)) {
      const value = getTemporalValue(key, filter);
      return (
        <TemporalInput
          key={key}
          fieldKey={key}
          label={label}
          value={value}
          type={type as "date" | "datetime" | "time"}
        />
      );
    }

    // Handle regular types
    const value = filter[key];

    switch (type) {
      case "number":
        return (
          <NumberInput
            key={key}
            fieldKey={key}
            label={label}
            value={value as string | number}
          />
        );

      case "string":
        return (
          <StringInput
            key={key}
            fieldKey={key}
            label={label}
            value={value as string}
          />
        );

      case "phone":
        return (
          <PhoneInput
            key={key}
            fieldKey={key}
            label={label}
            value={value as string}
          />
        );

      case "boolean":
        return (
          <BooleanInput
            key={key}
            fieldKey={key}
            label={label}
            value={value as string | boolean}
            trueLabel={trueLabel}
            falseLabel={falseLabel}
          />
        );

      case "array":
        return (
          <ArrayInput
            key={key}
            fieldKey={key}
            label={label}
            value={value as string[]}
          />
        );

      default:
        return <UnsupportedInput key={key} fieldKey={key} label={label} />;
    }
  };

  return (
    <div
      className={`grid max-h-[300px]! w-[300px] grid-cols-[1fr_1fr] gap-y-3 overflow-x-hidden ${
        fields.length > 10 ? "overflow-y-scroll" : ""
      } rounded-none! p-2 text-xs! *:w-full!`}
    >
      {fields.map(renderField)}
    </div>
  );
}
