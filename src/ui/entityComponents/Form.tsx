import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

import useForm from "./hooks/useForm";
//make formFields

type FormProps<T extends EntityKey> = {
  fields: FormKey<T>[];
  mode: "add" | "update";
};

export default function Form<T extends EntityKey>({
  fields,
  mode,
}: FormProps<T>) {
  // const { getValues } = useFormContext();
  // console.log(getValues());

  const { selectedFields, renderField } = useForm<T>(fields, mode);

  return <>{selectedFields.map(renderField)}</>;
}
