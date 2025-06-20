import { useFormContext } from "react-hook-form";
import type { RegisterOptions, FieldValues } from "react-hook-form";

interface BooleanInputProps {
  fieldKey: string;
  label: string;
  trueLabel?: string;
  falseLabel?: string;
  value?: string | boolean;
  register?: ReturnType<typeof useFormContext>["register"];
  registerOptions?: RegisterOptions;
}

export default function BooleanInput({
  fieldKey,
  label,
  trueLabel,
  falseLabel,
}: BooleanInputProps) {
  const { register } = useFormContext<FieldValues>();
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <select id={fieldKey} {...register(fieldKey)}>
        <option value="all">All</option>
        <option value={trueLabel}>{trueLabel ?? "true"}</option>
        <option value={trueLabel}>{falseLabel ?? "false"}</option>
      </select>
    </>
  );
}
