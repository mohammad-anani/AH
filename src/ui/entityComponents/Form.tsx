import type { AllEntityKeys, FormKey } from "@/utils/models/types/util";

import useForm from "./hooks/useForm";

//make formFields

type FormProps<T extends AllEntityKeys> = {
  fields: FormKey<T>[];
  mode: "add" | "update";
};

export default function Form<T extends AllEntityKeys>({
  fields,
  mode,
}: FormProps<T>) {
  const { selectedFields, renderField } = useForm<T>(fields, mode);

  return <>{selectedFields.map(renderField)}</>;
}
