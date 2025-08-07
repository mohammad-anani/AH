import Controller from "@/ui/customComponents/Controller";
import Select from "react-select";
import { generateLabel } from "../entityComponents/listComponents/utils";
import type { CSSObjectWithLabel } from "react-select";

interface SelectOption {
  value: string | number;
  label: string;
}

interface ArrayInputProps {
  fieldKey: string;
  label: string;
  data: string[] | SelectOption[];
}

const selectStyles = {
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    fontSize: "inherit",
    minHeight: "auto", // remove fixed height
    height: "100%", // fill available height
  }),
  valueContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    padding: "0 6px",
  }),
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    height: "100%", // fill height here too
  }),
  dropdownIndicator: (base: CSSObjectWithLabel) => ({
    ...base,
    padding: 2,
    svg: {
      width: 12,
      height: 12,
    },
  }),
  clearIndicator: (base: CSSObjectWithLabel) => ({
    ...base,
    padding: 2,
    svg: {
      width: 12,
      height: 12,
    },
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    fontSize: 10,
  }),
  option: (base: CSSObjectWithLabel) => ({
    ...base,
    fontSize: 10,
    padding: "4px 8px",
  }),
};

function isSelectOptionArray(
  data: string[] | SelectOption[],
): data is SelectOption[] {
  return data.length > 0 && typeof data[0] === "object" && "value" in data[0];
}

function toValueLabelArray(arr: string[] | SelectOption[]): SelectOption[] {
  if (isSelectOptionArray(arr)) {
    return arr;
  }
  return arr.map((str) => ({ value: str, label: str }));
}

export default function ArrayInput({ fieldKey, label, data }: ArrayInputProps) {
  const placeholder = fieldKey.split(".").at(-1);
  const options = toValueLabelArray(data);

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Controller
        name={fieldKey}
        renderField={({ field }) => {
          const selectedOptions = field.value
            ? field.value.map((v: string) => ({ value: v, label: v }))
            : [];

          return (
            <Select
              inputId={fieldKey}
              isMulti
              options={options}
              placeholder={`Select ${generateLabel(placeholder ?? "")}`}
              value={selectedOptions}
              styles={selectStyles}
              onChange={(options) => {
                const newValues = options
                  ? options.map((opt) => opt.value)
                  : [];

                field.onChange(newValues);
              }}
              onBlur={field.onBlur}
            />
          );
        }}
      />
    </>
  );
}
