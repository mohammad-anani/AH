import Controller from "@/ui/customComponents/Controller";
import Select from "react-select";
import { generateLabel } from "../entityComponents/listComponents/utils";

interface ArrayInputProps {
  fieldKey: string;
  label: string;
  data: unknown[];
}

const selectStyles = {
  control: (base: Record<string, unknown>) => ({
    ...base,
    fontSize: "inherit",
    minHeight: "auto", // remove fixed height
    height: "100%", // fill available height
  }),
  valueContainer: (base: Record<string, unknown>) => ({
    ...base,
    padding: "0 6px",
  }),
  input: (base: Record<string, unknown>) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (base: Record<string, unknown>) => ({
    ...base,
    height: "100%", // fill height here too
  }),
  dropdownIndicator: (base: Record<string, unknown>) => ({
    ...base,
    padding: 2,
    svg: {
      width: 12,
      height: 12,
    },
  }),
  clearIndicator: (base: Record<string, unknown>) => ({
    ...base,
    padding: 2,
    svg: {
      width: 12,
      height: 12,
    },
  }),
  menu: (base: Record<string, unknown>) => ({
    ...base,
    fontSize: 10,
  }),
  option: (base: Record<string, unknown>) => ({
    ...base,
    fontSize: 10,
    padding: "4px 8px",
  }),
};

function toValueLabelArray(arr: string[]): { value: string; label: string }[] {
  return arr.map((str) => ({ value: str, label: str }));
}

export default function ArrayInput({ fieldKey, label, data }: ArrayInputProps) {
  const placeholder = fieldKey.split(".").at(-1);

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
              options={toValueLabelArray(data as string[])}
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
