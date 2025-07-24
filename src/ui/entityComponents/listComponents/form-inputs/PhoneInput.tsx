import PhoneInp from "../../../customComponents/PhoneInput";
import Controller from "@/ui/customComponents/Controller";

interface PhoneInputProps {
  fieldKey: string;
  label: string;
}

export default function PhoneInput({ fieldKey, label }: PhoneInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Controller
        name={fieldKey}
        renderField={({ field }) => (
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
