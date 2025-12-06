import { formatTitle } from "@/utils/formatters/formatTitle";
import throwError from "@/utils/helpers/throwError";

import { schemas as addSchemas } from "@/utils/models/zod/addSchemas/addSchemas";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { zodResolver } from "@hookform/resolvers/zod";

import { convertToUpdateObject } from "@/utils/helpers/flatten.ts";
import { emptyObjects } from "@/utils/models/types/add/emptyObjects";
import { schemas as updateSchemas } from "@/utils/models/zod/updateSchemas/updateSchemas";
import { useForm, type DefaultValues } from "react-hook-form";
import {
  useLoaderData,
  useLocation,
  useNavigation,
  useOutletContext,
  useSubmit,
} from "react-router-dom";
import type z from "zod";

export default function useAddUpdateForm<T extends EntityKey>(
  entity: T,
  customSchema?: z.ZodTypeAny,
  customTitle?: string,
  customIsAdd?: boolean,
) {
  const loadbData = useLoaderData();

  const outletdata = useOutletContext<typesObject[EntityKey]>();

  const data = entity !== "Operation" ? outletdata : loadbData;

  console.log(data);

  const location = useLocation();

  const navData = location.state;

  const isAdd =
    customIsAdd !== undefined
      ? customIsAdd
      : location.pathname.includes("/add");

  const schema =
    customSchema || (isAdd ? addSchemas[entity] : updateSchemas[entity]);

  const defaultValues = isAdd
    ? entity === "Doctor"
      ? { ...navData }
      : { ...emptyObjects[entity], ...navData }
    : convertToUpdateObject(data);


  const title =
    customTitle || `${isAdd ? "Add" : "Edit"} ${formatTitle(entity)}`;


  const methods = useForm({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues: defaultValues as DefaultValues<any>,
    criteriaMode: "all",
    mode: "onChange", reValidateMode: "onChange"
  });

  const {
    handleSubmit,
    formState: { isSubmitting: isSub, errors },
  } = methods;

  console.log(errors);
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;


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
