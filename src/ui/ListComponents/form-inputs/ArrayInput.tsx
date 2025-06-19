import useListContext from "../context";
import Select from "react-select";

interface ArrayInputProps {
  fieldKey: string;
  label: string;
  value: string[];
}

const selectOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

const selectStyles = {
  control: (base: Record<string, unknown>) => ({
    ...base,
    fontSize: 10,
    minHeight: 24,
    minheight: 24,
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

export default function ArrayInput({
  fieldKey,
  label,
  value,
}: ArrayInputProps) {
  const { setFilter } = useListContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Select
        isMulti
        name={fieldKey}
        defaultValue={
          value ? value.map((v: string) => ({ value: v, label: v })) : []
        }
        onChange={(options) => {
          setFilter((prev) => ({
            ...prev,
            [fieldKey]: options,
          }));
        }}
        options={selectOptions}
        styles={selectStyles}
      />
    </>
  );
}
