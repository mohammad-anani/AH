import { cloneElement } from "react";
import { get, useFormContext, useWatch } from "react-hook-form";

import React from "react";
import { useNavigation } from "react-router-dom";
import type { Primitive } from "zod";

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
    formState: { errors, isSubmitting: isSub },
  } = useFormContext();

  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  const errorObj = get(errors, name);
  const errorMessages: string[][] = [];

  if (errorObj) {
    if (errorObj.types) {
      errorMessages.push(...(Object.values(errorObj.types) as string[][]));
    } else if (errorObj.message) {
      errorMessages.push(errorObj.message);
    }
  }

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
      {errorMessages[0] && errorMessages[0].length ? (
        <ul className="grid grid-cols-1 text-sm! *:text-red-500!">
          {typeof errorMessages[0] === "string" ? (
            <li>{`* ${errorMessages[0]}`}</li>
          ) : (
            (errorMessages[0] as string[]).map((msg: string, i) => (
              <li key={i}>{`* ${msg}`}</li>
            ))
          )}
        </ul>
      ) : null}
    </span>
  );
}
