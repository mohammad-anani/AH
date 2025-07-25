import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  useNavigation,
  useOutletContext,
  useSubmit,
} from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { addingSchemas } from "@/utils/models/schema/addingSchemasObject";
import { schemas } from "@/utils/models/schema/schemasObject.ts";
import type { typesObject } from "@/utils/models/types/typesObject";
import throwError from "@/utils/helpers/throwError";
import type { EntityKey } from "@/utils/models/types/util";
import { z } from "zod";
import { emptyObjects } from "@/utils/models/types/emptyObjectsObject";
import { Forms } from "@/utils/models/FormObject";

type FormProps = {
  entity: EntityKey;
  submitText?: string;
  submittingText?: string;
  headerWidth?: number;
};

export default function AddUpdateForm({
  entity,
  headerWidth = 150,
  submitText = "Save",
  submittingText = "Submitting...",
}: FormProps) {
  const data = useOutletContext<typesObject[EntityKey]>();

  const isAdd = !data;

  const schema = isAdd ? addingSchemas[entity] : schemas[entity];

  const defaultValues = isAdd ? emptyObjects[entity] : data;

  const title = `${isAdd ? "Add" : "Edit"} ${entity}`;

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

  const EntityForm = Forms[entity];

  if (!schema || !defaultValues || !EntityForm)
    throwError(500, "Internal server error", "");

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <H2 className="mb-6">{title}</H2>
      <FormProvider {...methods}>
        <Form
          replace
          method="POST"
          onSubmit={handleSubmit((data) => {
            submit(data, { method: "POST", encType: "application/json" });
          })}
          className={`grid grid-cols-[${headerWidth}px_1fr] gap-y-3 *:text-xl! *:odd:font-bold`}
        >
          <EntityForm />
          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? submittingText
              : submitText !== "Save"
                ? submitText
                : isAdd
                  ? "Add"
                  : "Save"}
          </Clickable>
        </Form>
      </FormProvider>
    </>
  );
}
