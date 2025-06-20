import { useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

interface TemporalInputProps {
  fieldKey: string;
  label: string;
  type: "date" | "datetime" | "time";
}

export default function TemporalInput({
  fieldKey,
  label,
  type,
}: TemporalInputProps) {
  const { register } = useFormContext<FieldValues>();
  const inputType = type === "datetime" ? "datetime-local" : type;

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <span id={fieldKey} className="grid w-full! grid-cols-[50px_1fr] gap-y-1">
        <label htmlFor={fieldKey + "From"}>From:</label>
        <input
          id={fieldKey + "From"}
          type={inputType}
          {...register(fieldKey + "From")}
        />
        <label htmlFor={fieldKey + "To"}> To:</label>
        <input
          id={fieldKey + "To"}
          type={inputType}
          {...register(fieldKey + "To")}
        />
      </span>
    </>
  );
}
