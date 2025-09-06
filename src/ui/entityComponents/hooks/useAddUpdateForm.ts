import { formatTitle } from "@/utils/formatters/formatTitle";
import throwError from "@/utils/helpers/throwError";

import { schemas as addSchemas } from "@/utils/models/zod/addSchemas/addSchemas";

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
import { emptyObjects } from "@/utils/models/types/add/emptyObjects";
import { schemas as updateSchemas } from "@/utils/models/zod/updateSchemas/updateSchemas";
import flatten, { convertToUpdateObject } from "@/utils/helpers/flatten";

export default function useAddUpdateForm<T extends EntityKey>(entity: T) {
  const data = useOutletContext<typesObject[EntityKey]>();

  const location = useLocation();

  const navData = location.state;

  const isAdd = location.pathname.includes("/add");

  const schema = isAdd ? addSchemas[entity] : updateSchemas[entity];
  const defaultValues = isAdd
    ? { ...emptyObjects[entity], ...navData }
    : convertToUpdateObject(data);

  console.log(defaultValues);

  const title = `${isAdd ? "Add" : "Edit"} ${formatTitle(entity)}`;

  console.log(schema);

  //to check
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<z.infer<typeof schema>>,
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { isSubmitting: isSub, errors },
  } = methods;

  console.log(errors);
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  // removed console.log

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
