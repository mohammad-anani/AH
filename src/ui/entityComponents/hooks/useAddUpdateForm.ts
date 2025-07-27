import { formatTitle } from "@/utils/formatters/formatTitle";
import throwError from "@/utils/helpers/throwError";
import { formConfig } from "@/utils/models/componentsConfig/formConfig";
import { addingSchemas } from "@/utils/models/schema/addingSchemasObject";
import { schemas } from "@/utils/models/schema/schemasObject";
import { emptyObjects } from "@/utils/models/types/emptyObjectsObject";
import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey } from "@/utils/models/types/util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubmit, useNavigation, useOutletContext } from "react-router-dom";
import type z from "zod";

export default function useAddUpdateForm(entity: EntityKey) {
  const data = useOutletContext<typesObject[EntityKey]>();

  const isAdd = !data;

  const schema = isAdd ? addingSchemas[entity] : schemas[entity];

  const defaultValues = isAdd ? emptyObjects[entity] : data;

  const title = `${isAdd ? "Add" : "Edit"} ${formatTitle(entity)}`;

  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as z.infer<typeof schema>,
    criteriaMode: "all",
  });
  const {
    handleSubmit,
    formState: { isSubmitting: isSub },
  } = methods;
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  if (!schema || !defaultValues) throwError(500, "Internal server error", "");

  const formFields = formConfig[entity];

  return {
    title,
    methods,
    handleSubmit,
    submit,
    formFields,
    isAdd,
    isSubmitting,
  };
}
