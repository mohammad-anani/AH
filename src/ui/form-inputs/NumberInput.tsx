import { memo, useCallback } from "react";
import type { Primitive } from "react-hook-form";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface NumberInputProps {
  fieldKey: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  placeholder?: string;
}

const NumberInput = memo(function NumberInput({
  fieldKey,
  label,
  min,
  max,
  step = 0.01,
  required = false,
  placeholder,
}: NumberInputProps) {
  const inputId = `input-${fieldKey}`;

  // Memoize the onChange callback to prevent unnecessary re-renders
  const handleChange = useCallback((value: Primitive): Primitive => {
    console.log(typeof value);
    return typeof value === "string" ? Number(value) : value;
  }, []);

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
      <RegisteredInput name={fieldKey} onChange={handleChange}>
        <input
          id={inputId}
          type="number"
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          aria-required={required}
          aria-describedby={`${inputId}-error`}
        />
      </RegisteredInput>
    </>
  );
});

export default NumberInput;
