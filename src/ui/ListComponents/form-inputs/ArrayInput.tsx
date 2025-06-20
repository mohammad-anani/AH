import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

interface ArrayInputProps {
  fieldKey: string;
  label: string;
}

const selectStyles = {
  control: (base: Record<string, unknown>) => ({
    ...base,
    fontSize: 10,
    minHeight: 24,
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
    height: 24,
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

const selectOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

export default function ArrayInput({ fieldKey, label }: ArrayInputProps) {
  const { control } = useFormContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Controller
        control={control}
        name={fieldKey}
        render={({ field }) => {
          const selectedOptions = field.value
            ? field.value.map((v: string) => ({ value: v, label: v }))
            : [];

          return (
            <Select
              inputId={fieldKey}
              isMulti
              options={selectOptions}
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
