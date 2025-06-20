import { useFormContext } from "react-hook-form";
import type { RegisterOptions, FieldValues } from "react-hook-form";
import PhoneInp from "../../PhoneInput";

interface PhoneInputProps {
  fieldKey: string;
  label: string;
  value?: string;
  register?: ReturnType<typeof useFormContext>["register"];
  registerOptions?: RegisterOptions;
}

export default function PhoneInput({ fieldKey, label }: PhoneInputProps) {
  const { register } = useFormContext<FieldValues>();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <PhoneInp name={fieldKey} id={fieldKey} register={register} />
    </>
  );
}
