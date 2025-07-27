import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface NumberInputProps {
  fieldKey: string;
  label: string;
}

export default function NumberInput({ fieldKey, label }: NumberInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <RegisteredInput name={fieldKey}>
        <input type="number" />
      </RegisteredInput>
    </>
  );
}
