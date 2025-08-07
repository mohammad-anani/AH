import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface StringInputProps {
  fieldKey: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function StringInput({
  fieldKey,
  label,
  placeholder,
  required = false,
}: StringInputProps) {
  const inputId = `input-${fieldKey}`;

  return (
    <>
      <label htmlFor={inputId} className={required ? "required" : ""}>
        {label}
        {required && (
          <span aria-label="required" className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>
      <RegisteredInput name={fieldKey}>
        <input
          id={inputId}
          type="text"
          placeholder={placeholder}
          aria-required={required}
          aria-describedby={`${inputId}-error`}
        />
      </RegisteredInput>
    </>
  );
}
