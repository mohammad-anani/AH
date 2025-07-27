interface UnsupportedInputProps {
  fieldKey: string;
  label: string;
}

export default function UnsupportedInput({
  fieldKey,
  label,
}: UnsupportedInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <span>Unsupported field</span>
    </>
  );
}
