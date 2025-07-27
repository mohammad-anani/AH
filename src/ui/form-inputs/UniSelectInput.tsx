import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface NumberInputProps {
  fieldKey: string;
  label: string;
  data: unknown[];
}

export default function SelectInput({
  fieldKey,
  label,
  data,
}: NumberInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <RegisteredInput name={fieldKey}>
        <select>
          {(data as string[]).map((slot) => (
            <option value={slot}>{slot}</option>
          ))}
        </select>
      </RegisteredInput>
    </>
  );
}
