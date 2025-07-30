import type { EntityKey, FormKey } from "@/utils/models/types/util";

import useForm from "./hooks/useForm";
import { useFormContext } from "react-hook-form";

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
