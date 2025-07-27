import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import { FormProvider } from "react-hook-form";
import { Form as RouterForm } from "react-router-dom";

import type { EntityKey } from "@/utils/models/types/util";
import Form from "./Form";

import useAddUpdateForm from "./hooks/useAddUpdateForm";

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
  const {
    title,
    methods,
    handleSubmit,
    submit,
    formFields,
    isAdd,
    isSubmitting,
  } = useAddUpdateForm(entity);

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <H2 className="mb-6">{title}</H2>
      <FormProvider {...methods}>
        <RouterForm
          replace
          method="POST"
          onSubmit={handleSubmit((data) => {
            submit(data, { method: "POST", encType: "application/json" });
          })}
          className={`grid grid-cols-[${headerWidth}px_1fr] gap-y-3 *:text-xl! *:odd:font-bold`}
        >
          <Form fields={formFields} mode={isAdd ? "add" : "update"} />
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
        </RouterForm>
      </FormProvider>
    </>
  );
}
