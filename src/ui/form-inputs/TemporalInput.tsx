import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import type { FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

interface TemporalInputProps {
  fieldKey: string;
  label: string;
  data: "date" | "datetime" | "time";
}

export default function TemporalInput({
  fieldKey,
  label,
  data: type,
}: TemporalInputProps) {
  const {
    register,
    formState: { errors },
    getValues,
    watch,
  } = useFormContext<FieldValues>();

  const isFromTo = Object.keys(getValues()).some(
    (key) => key === fieldKey + "From" || key === fieldKey + "To",
  );

  const inputType = type === "datetime" ? "datetime-local" : type;

  const labelSpan = <label htmlFor={fieldKey}>{label}</label>;

  if (!isFromTo)
    return (
      <>
        {labelSpan}
        <RegisteredInput name={fieldKey}>
          <input type={inputType} />
        </RegisteredInput>
      </>
    );

  const dateTo = watch(fieldKey + "To");

  return (
    <>
      {labelSpan}

      <span id={fieldKey} className="grid w-full! grid-cols-[50px_1fr] gap-y-1">
        <label htmlFor={fieldKey + "From"}>From:</label>
        <input
          id={fieldKey + "From"}
          type={inputType}
          {...register(fieldKey + "From", {
            validate: (value) => !dateTo || new Date(value) <= new Date(dateTo),
          })}
        />
        <label htmlFor={fieldKey + "To"}> To:</label>
        <input
          id={fieldKey + "To"}
          type={inputType}
          {...register(fieldKey + "To")}
        />
        {errors[fieldKey + "From"] && (
          <span className="text-destructive! col-span-2">
            'From Date' should be before or equal to 'To Date'
          </span>
        )}
      </span>
    </>
  );
}

