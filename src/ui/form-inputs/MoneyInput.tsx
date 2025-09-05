import MoneyInp from "@/ui/customComponents/MoneyInput";
import { useFormContext, Controller } from "react-hook-form";
import type { FieldValues, RegisterOptions } from "react-hook-form";
import useError from "./useError";
import FormError from "../customComponents/FormError";

interface TemporalInputProps {
  fieldKey: string;
  label: string;
}

export default function MoneyInput({ fieldKey, label }: TemporalInputProps) {
  const {
    control,
    formState: { errors },
    watch,
    getValues,
  } = useFormContext<FieldValues>();

  const fromKey = fieldKey + "From";
  const toKey = fieldKey + "To";
  const values = getValues();
  const isFromTo = fromKey in values || toKey in values;

  const toValue = watch(toKey);

  const errorMessages = useError(fieldKey);

  const renderMoney = (
    name: string,
    validation?:
      | Omit<
          RegisterOptions<FieldValues, string>,
          "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
        >
      | undefined,
  ) => (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field }) => (
        <MoneyInp
          name={field.name}
          initialValue={field.value}
          onChange={(val) => field.onChange(+val)}
        />
      )}
    />
  );

  if (!isFromTo) {
    return (
      <>
        <label htmlFor={fieldKey}>{label}</label>
        <span>
          {renderMoney(fieldKey)}
          <FormError errorMessages={errorMessages} />
        </span>
      </>
    );
  }

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <div className="grid w-full! grid-cols-[50px_1fr] gap-y-1">
        <label htmlFor={fromKey}>From:</label>
        {renderMoney(fromKey, {
          validate: (value: string) => {
            if (!toValue) return true;
            return (
              value <= toValue ||
              `'From ${fieldKey}' should be less than or equal to 'To ${fieldKey}'`
            );
          },
        })}

        <label htmlFor={toKey}>To:</label>
        {renderMoney(toKey)}

        {(errors[fromKey] || errors[toKey]) && (
          <span className="text-destructive! col-span-2">
            {errors[fromKey]?.message?.toString() ||
              errors[toKey]?.message?.toString()}
          </span>
        )}
      </div>
    </>
  );
}
