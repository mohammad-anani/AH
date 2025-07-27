import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface StringInputProps {
  fieldKey: string;
  label: string;
}

export default function EmailInput({ fieldKey, label }: StringInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <RegisteredInput name={fieldKey}>
        <input id={fieldKey} type="email" />
      </RegisteredInput>
    </>
  );
}
