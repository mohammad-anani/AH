import { cloneElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import React from "react";
import { useNavigation } from "react-router-dom";
import type { Primitive } from "zod";
import useError from "../form-inputs/useError";
import FormError from "./FormError";

type RegisteredInputProps = {
  name: string;
  onChange?: (value: Primitive) => Primitive;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
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
    <span className={`flex flex-col gap-1`}>
      {cloneElement(children, {
        ...registered,
        onChange: (e) => {
          const newValue = onChange?.(e.target.value) ?? e.target.value;
          setValue(name, newValue);
          registered.onChange(e);
        },
        value,
        disabled: isSubmitting,
        id: name,
      })}
      <FormError errorMessages={errorMessages} />
    </span>
  );
}
