import { formatTitle } from "@/utils/formatters/formatTitle";
import throwError from "@/utils/helpers/throwError";

import { schemas } from "@/utils/models/zod/schemas/schemas";
import { schemas as addingSchemas } from "@/utils/models/zod/addingSchemas/addingSchemas";
import { emptyObjects } from "@/utils/models/types/empty/emptyObjects";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, type DefaultValues } from "react-hook-form";
import {
  useSubmit,
  useNavigation,
  useOutletContext,
  useLocation,
} from "react-router-dom";
import type z from "zod";

export default function useAddUpdateForm<T extends EntityKey>(entity: T) {
  const data = useOutletContext<typesObject[EntityKey]>();

  const location = useLocation();

  const navData = location.state;

  const isAdd = !data || !schemas[entity].safeParse(data).success;

  const schema = isAdd ? addingSchemas[entity] : schemas[entity];

  const defaultValues = isAdd ? { ...emptyObjects[entity], ...navData } : data;

  const title = `${isAdd ? "Add" : "Edit"} ${formatTitle(entity)}`;

  //to check
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<z.infer<typeof schema>>,
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting: isSub, errors },
  } = methods;
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  console.log(errors, getValues());

  if (!schema || !defaultValues)
    throwError(500, "schema or default values didn't load.");

  return {
    title,
    methods,
    handleSubmit,
    submit,

    isAdd,
    isSubmitting,
  };
}
