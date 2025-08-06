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

export type Process = "Start" | "Cancel" | "Complete";

export default function ServiceProcess<T extends ServicesEntities>({
  process,
  entity,
  formFields,
}: {
  process: Process;
  entity: T;
  formFields: FormKey<T>;
}) {
  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <div className="flex items-center justify-between">
        <H2>{process + " " + formatTitle(entity)}</H2>
      </div>

      <Clickable
        className="col-span-2 mt-10"
        as="button"
        type="submit"
        variant="primary"
      >
        {process}
      </Clickable>
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
