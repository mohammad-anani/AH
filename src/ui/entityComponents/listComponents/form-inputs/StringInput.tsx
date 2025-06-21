import { useFormContext } from "react-hook-form";
import type { RegisterOptions, FieldValues } from "react-hook-form";

interface StringInputProps {
  fieldKey: string;
  label: string;
  value?: string;
  register?: ReturnType<typeof useFormContext>["register"];
  registerOptions?: RegisterOptions;
}

export default function StringInput({ fieldKey, label }: StringInputProps) {
  const { register } = useFormContext<FieldValues>();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <input id={fieldKey} type="text" {...register(fieldKey)} />
    </>
  );
}
