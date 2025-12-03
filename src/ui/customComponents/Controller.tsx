import type { ReactElement } from "react";
import type { ControllerRenderProps } from "react-hook-form";
import { Controller as Controler, useFormContext } from "react-hook-form";

import type { emptyObjectsTypes } from "@/utils/models/types/add/emptyTypesObject";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useError } from "../form-inputs";
import FormError from "./FormError";

interface ControlledFieldProps {
  name: string;
  errorMessage?: string;
  renderField: (props: {
    field: ControllerRenderProps;
    isSubmitting: boolean;
  }) => ReactElement;
  defaultValue?: (emptyObjectsTypes | typesObject)[EntityKey];
}

export default function Controller({
  name,
  renderField,

  defaultValue,
}: ControlledFieldProps) {
  const { control } = useFormContext();

  const errorMessages = useError(name);

  const formErrorMessages = Array.isArray(errorMessages)
    ? errorMessages
    : typeof errorMessages === "object" && errorMessages
      ? Object.values(errorMessages).flat()
      : undefined;

  return (
    <span>
      <Controler
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, formState }) =>
          renderField({ field, isSubmitting: formState.isSubmitting })
        }
      />
      <FormError errorMessages={formErrorMessages} />
    </span>
  );
}
