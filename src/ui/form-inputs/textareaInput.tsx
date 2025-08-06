import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface TextareaInputProps {
  fieldKey: string;
  label: string;
}

export default function TextareaInput({ fieldKey, label }: TextareaInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <RegisteredInput name={fieldKey}>
        <textarea id={fieldKey} rows={4} />
      </RegisteredInput>
    </>
  );
}
