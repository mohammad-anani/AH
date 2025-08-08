import { cloneElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import React from "react";
import { useNavigation } from "react-router-dom";
import type { Primitive } from "react-hook-form";
import useError from "../form-inputs/useError";
import FormError from "./FormError";

type RegisteredInputProps = {
  name: string;
  onChange?: (value: Primitive) => Primitive;
  children: React.ReactElement<
    React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>
  >;
};

export default function RegisteredInput({
  name,
  onChange,
  children,
}: RegisteredInputProps) {
  const {
    register,
    setValue,
    control,
    formState: { isSubmitting: isSub },
  } = useFormContext();

  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  const errorMessages = useError(name);
  const registered = register(name);
  const value = useWatch({ name, control });

  return (
    <span className="flex flex-col gap-1">
      {cloneElement(children, {
        ...registered,
        onChange: onChange
          ? (e) => {
              const value = e.target.value;

              onChange?.(value);
              setValue(name, value, { shouldValidate: true });
            }
          : registered.onChange,
        value,
        name,
        disabled: isSubmitting,
        id: name,
      })}
      <FormError errorMessages={errorMessages} />
    </span>
  );
}
