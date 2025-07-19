/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import type { OptionalChildrenProps } from "@/utils/models/types";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  useNavigation,
  useOutletContext,
  useSubmit,
} from "react-router-dom";
import type { Schema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DepartmentForm from "@/features/department/Form";
import { addingSchemas } from "@/utils/models/schema/addingSchemasObject";
import { schemas } from "@/utils/models/schema/schemasObject.ts";
import { emptyObjects } from "@/utils/models/emptyObjects/emptyObjectsObject";

const Forms: Record<string, React.ComponentType> = {
  Departments: DepartmentForm,
};

export default function AddUpdateForm({
  headerWidth = 150,
  submitText = "Save",
  submittingText = "Submitting...",
}: {
  title: string;
  schema: Schema<any, any>;
  defaultValues: any;
  submitText?: string;
  submittingText?: string;
  headerWidth?: number;
} & OptionalChildrenProps) {
  const department = useOutletContext();

  const isAdd = !department;

  const schema = isAdd ? addingSchemas["Departments"] : schemas["Departments"];
  const defaultValues = isAdd ? emptyObjects["Departments"] : department;
  const title = `${isAdd ? "Add" : "Edit"} Department`;

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    criteriaMode: "all",
  });
  const {
    handleSubmit,
    formState: { isSubmitting: isSub },
  } = methods;
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  const EntityForm = Forms["Departments"];
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
