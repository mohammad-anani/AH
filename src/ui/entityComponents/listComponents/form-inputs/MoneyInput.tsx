import { useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

interface TemporalInputProps {
  fieldKey: string;
  label: string;
}

export default function MoneyInput({ fieldKey, label }: TemporalInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FieldValues>();

  const MoneyTo = watch(fieldKey + "To");

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <span id={fieldKey} className="grid w-full! grid-cols-[50px_1fr] gap-y-1">
        <label htmlFor={fieldKey + "From"}>From:</label>
        <input
          type="number"
          id={fieldKey + "From"}
          {...register(fieldKey + "From", {
            validate: (value) => !MoneyTo || value <= MoneyTo,
          })}
        />
        <label htmlFor={fieldKey + "To"}> To:</label>
        <input
          id={fieldKey + "To"}
          {...register(fieldKey + "To")}
          type="number"
        />
        {errors[fieldKey + "From"] && (
          <span className="text-destructive! col-span-2">
            'From Amount' should be less or equal to 'To Amount'
          </span>
        )}
      </span>
    </>
  );
}
