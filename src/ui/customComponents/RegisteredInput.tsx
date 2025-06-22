import { cloneElement } from "react";
import { get, useFormContext } from "react-hook-form";

import React from "react";
import { useNavigation } from "react-router-dom";

export default function RegisteredInput({
  name,
  children,
}: {
  name: string;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
}) {
  const {
    register,
    formState: { errors, isSubmitting: isSub },
  } = useFormContext();

  const { state } = useNavigation();

  const isSubmitting = state === "submitting" || isSub;

  const errorMessage = get(errors, name)?.message;

  return (
    <span className={`flex flex-col gap-1`}>
      {cloneElement(children, {
        ...register(name),
        disabled: isSubmitting,
      })}
      <span className="text-sm! text-red-500!">
        {errorMessage && `* ${errorMessage}`}
      </span>
    </span>
  );
}
