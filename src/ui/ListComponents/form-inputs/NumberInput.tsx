import { useFormContext } from "react-hook-form";
import type { RegisterOptions, FieldValues } from "react-hook-form";

interface NumberInputProps {
  fieldKey: string;
  label: string;
  value?: string | number;
  register?: ReturnType<typeof useFormContext>["register"];
  registerOptions?: RegisterOptions;
}

export default function NumberInput({ fieldKey, label }: NumberInputProps) {
  const { register } = useFormContext<FieldValues>();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <input id={fieldKey} type="number" {...register(fieldKey)} />
    </>
  );
}
