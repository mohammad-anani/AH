import { useFormContext } from "react-hook-form";
import type { RegisterOptions, FieldValues } from "react-hook-form";

interface NumberInputProps {
  fieldKey: string;
  label: string;
  value?: string | number;
  register?: ReturnType<typeof useFormContext>["register"];
  data: unknown[];
  registerOptions?: RegisterOptions;
}

export default function SelectInput({
  fieldKey,
  label,
  data,
}: NumberInputProps) {
  const { register } = useFormContext<FieldValues>();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <select id={fieldKey} {...register(fieldKey)}>
        {(data as string[]).map((slot) => (
          <option value={slot}>{slot}</option>
        ))}
      </select>
    </>
  );
}
