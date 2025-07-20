import { cloneElement } from "react";
import { get, useFormContext } from "react-hook-form";

import React from "react";
import { useNavigation } from "react-router-dom";
import type { Primitive } from "zod";

export default function RegisteredInput({
  name,
  onChange,
  children,
}: {
  name: string;
  onChange?: (value: Primitive) => Primitive;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
}) {
  const {
    register,
    setValue,
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

  return (
    <span className={`flex flex-col gap-1`}>
      {cloneElement(children, {
        ...register(name),
        onChange: (e) => {
          setValue(name, onChange?.(e.target.value));
        },
        disabled: isSubmitting,
        id: name,
      })}
      {errorMessages[0] && errorMessages[0].length ? (
        <ul className="grid grid-cols-1 text-sm! *:text-red-500!">
          {typeof errorMessages[0] === "string" ? (
            <li>{`* ${errorMessages[0]}`}</li>
          ) : (
            (errorMessages[0] as string[]).map((msg: string) => (
              <li>{`* ${msg}`}</li>
            ))
          )}
        </ul>
      ) : null}
    </span>
  );
}
