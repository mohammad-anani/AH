import { Controller, useFormContext } from "react-hook-form";
import type { RegisterOptions } from "react-hook-form";
import PhoneInp from "../../../customComponents/PhoneInput";

interface PhoneInputProps {
  fieldKey: string;
  label: string;
  value?: string;
  register?: ReturnType<typeof useFormContext>["register"];
  registerOptions?: RegisterOptions;
}

export default function PhoneInput({ fieldKey, label }: PhoneInputProps) {
  const { control } = useFormContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Controller
        control={control}
        name={fieldKey}
        render={({ field }) => (
          <PhoneInp
            name={field.name}
            format="xx xxx xxx"
            initialValue={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </>
  );
}
