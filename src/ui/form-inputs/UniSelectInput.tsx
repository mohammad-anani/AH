import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectInputProps {
  fieldKey: string;
  label: string;
  data: string[] | SelectOption[];
}

function isSelectOptionArray(
  data: string[] | SelectOption[],
): data is SelectOption[] {
  return data.length > 0 && typeof data[0] === "object" && "value" in data[0];
}

export default function SelectInput({
  fieldKey,
  label,
  data,
}: SelectInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <RegisteredInput name={fieldKey}>
        <select>
          <option value={null}>None</option>
          {isSelectOptionArray(data)
            ? data.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            : data.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
        </select>
      </RegisteredInput>
    </>
  );
}
