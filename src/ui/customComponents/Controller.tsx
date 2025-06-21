/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller as Controler, useFormContext } from "react-hook-form";
import type { ControllerRenderProps } from "react-hook-form";
import type { ReactElement } from "react";

interface ControlledFieldProps {
  name: string;
  renderField: (props: {
    field: ControllerRenderProps;
    isSubmitting: boolean;
  }) => ReactElement;
  defaultValue?: any;
}

export default function Controller({
  name,
  renderField,
  defaultValue,
}: ControlledFieldProps) {
  const { control } = useFormContext();

  return (
    <Controler
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, formState }) =>
        renderField({ field, isSubmitting: formState.isSubmitting })
      }
    />
  );
}
