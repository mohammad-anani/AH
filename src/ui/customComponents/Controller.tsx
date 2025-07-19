import { Controller as Controler, get, useFormContext } from "react-hook-form";
import type { ControllerRenderProps } from "react-hook-form";
import type { ReactElement } from "react";
import type { emptyObjectsTypes } from "@/utils/models/emptyObjects/emptyObjectsTypesObject";
import type { EntityKey } from "@/utils/models/types/util";
import type { typesObject } from "@/utils/models/types/typesObject";

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
  errorMessage,
  defaultValue,
}: ControlledFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
    <span>
      <Controler
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, formState }) =>
          renderField({ field, isSubmitting: formState.isSubmitting })
        }
      />
      {errorMessages[0] && errorMessages[0].length ? (
        <ul className="grid grid-cols-1 text-sm! *:text-red-500!">
          {(errorMessage && <li>{`* ${errorMessage}`}</li>) ||
            (typeof errorMessages[0] === "string" ? (
              <li>{`* ${errorMessages[0]}`}</li>
            ) : (
              (errorMessages[0] as string[]).map((msg: string) => (
                <li>{`* ${msg}`}</li>
              ))
            ))}
        </ul>
      ) : null}
    </span>
  );
}
