import type { ServicesEntities } from "./ServicesCard";
import Clickable from "../customComponents/Clickable";
import { formatTitle } from "@/utils/formatters/formatTitle";
import H2 from "../customComponents/H2";
import type {
  customFormProps,
  DataTypes,
} from "@/utils/models/types/utils/Form&Filter";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { inputMap } from "@/utils/models/inputMap";

import { UnsupportedInput } from "../form-inputs";
import { generateLabel } from "./listComponents/utils";
import Controller from "../customComponents/Controller";
import {
  Form,
  useOutletContext,
  useSubmit,
  type SubmitTarget,
} from "react-router-dom";
import { FormProvider, useForm, type Primitive } from "react-hook-form";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import throwError from "@/utils/helpers/throwError";
import type { FormKey } from "@/routing/serviceRoute";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "@/utils/models/zod/formSchemas/formSchemas";

export type Process = "Start" | "Cancel" | "Complete" | "Reschedule";

export default function ServiceProcess<T extends ServicesEntities>({
  process,
  entity,
  formFields,
}: {
  process: Process;
  entity: T;
  formFields?: FormKey<T>[];
}) {
  const submit = useSubmit();
  const object = useOutletContext() as typesObject[T];
  const { Status } = object;

  const defaultValues = object;

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemas[entity]),
  });

  const { handleSubmit } = methods;

  if (Status === "Completed")
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
  if (
    Status === "Cancelled" &&
    ["Cancel", "Start", "Complete"].includes(process)
  )
    throwError(403, "Can't " + process + " a cancelled" + formatTitle(entity));
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
          method="POST"
          onSubmit={handleSubmit((data) => {
            submit(data as SubmitTarget, {
              method: "POST",
              encType: "application/json",
            });
          })}
          className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold"
        >
          {(formFields as FormKey<EntityKey>[])
            ?.filter(([, , , mode]) => {
              // Only render fields where mode is undefined or includes the current process
              return (
                mode === "All" || !mode || Array.from(mode).includes(process)
              );
            })
            .map(renderField)}
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
