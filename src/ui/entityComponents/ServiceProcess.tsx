import type { ServicesEntities } from "./ServicesCard";
import Clickable from "../customComponents/Clickable";
import { formatTitle } from "@/utils/formatters/formatTitle";
import H2 from "../customComponents/H2";
import type {
  customFormProps,
  DataTypes,
  FormKey,
} from "@/utils/models/types/utils/Form&Filter";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { inputMap } from "@/utils/models/inputMap";

import { UnsupportedInput } from "../form-inputs";
import { generateLabel } from "./listComponents/utils";
import Controller from "../customComponents/Controller";
import { Form, useOutletContext } from "react-router-dom";
import { FormProvider, useForm, type Primitive } from "react-hook-form";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import throwError from "@/utils/helpers/throwError";

export type Process = "Start" | "Cancel" | "Complete";

export default function ServiceProcess<T extends ServicesEntities>({
  process,
  entity,
  formFields,
}: {
  process: Process;
  entity: T;
  formFields?: FormKey<T>[];
}) {
  const object = useOutletContext() as typesObject[T];
  const { Status } = object;

  const defaultValues =
    formFields?.reduce(
      (acc, [, fieldKey]) => {
        acc[fieldKey] = getNestedValue(object, fieldKey as string);
        return acc;
      },
      {} as Record<string, Primitive>,
    ) ?? {};

  const methods = useForm({ defaultValues: defaultValues });

  if (["Completed", "Cancelled"].includes(Status))
    throwError(
      403,
      "Can't " + process + " a completed or cancelled " + formatTitle(entity),
    );
  if (Status === "Scheduled" && process === "Complete")
    throwError(403, "Can't complete a scheduled " + formatTitle(entity));
  if (Status === "In Progress" && ["Cancel", "Start"].includes(process))
    throwError(
      403,
      "Can't " + process + " a " + formatTitle(entity) + " in progress",
    );

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <div className="flex items-center justify-between">
        <H2>{process + " " + formatTitle(entity)}</H2>
      </div>
      <FormProvider {...methods}>
        <Form
          replace
          className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold"
        >
          {(formFields as FormKey<EntityKey>[])?.map(renderField)}
          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type="submit"
            variant="primary"
          >
            {process}
          </Clickable>
        </Form>
      </FormProvider>
    </>
  );
}

const renderField = (field: FormKey<EntityKey>) => {
  const [label, key, type, , data] = field;

  const commonProps = {
    fieldKey: key,
    label: label + ":",
    data: data || type,
  };

  if (type === "custom") {
    const [element] = data as customFormProps;

    if (typeof element !== "function")
      return <UnsupportedInput {...commonProps} />;

    const Input = element;

    return (
      <>
        <label htmlFor={String(key)}>{generateLabel(label) + ":"}</label>
        <Controller
          name={String(key)}
          renderField={({ field }) => {
            return <Input field={field.value} onChange={field.onChange} />;
          }}
        />
      </>
    );
  }

  const InputComponent = inputMap[type as DataTypes] || UnsupportedInput;

  return <InputComponent {...commonProps} />;
};

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}
