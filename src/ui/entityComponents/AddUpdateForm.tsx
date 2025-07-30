import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import { FormProvider } from "react-hook-form";
import { Form as RouterForm } from "react-router-dom";

import type { EntityKey } from "@/utils/models/types/util";
import Form from "./Form";

import useAddUpdateForm from "./hooks/useAddUpdateForm";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { DialogFooter } from "@/components/ui/dialog";

type FormProps = {
  entity: EntityKey;
  submitText?: string;
  submittingText?: string;
  headerWidth?: number;
  confirmation?: {
    title: string;
    content: string;
    cancel: string;
    confirm: string;
  };
};

export default function AddUpdateForm({
  entity,
  headerWidth = 150,
  submitText = "Save",
  submittingText = "Submitting...",
  confirmation,
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

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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
            type={confirmation ? "button" : "submit"}
            onClick={confirmation ? () => setIsConfirmOpen(true) : undefined}
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
        {confirmation ? (
          <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <DialogPortal>
              <DialogContent>
                <DialogTitle>
                  <H2>{confirmation.title}</H2>
                </DialogTitle>
                <span>{confirmation.content}</span>
                <DialogFooter>
                  <Clickable
                    as="button"
                    variant="secondary"
                    onClick={() => setIsConfirmOpen(false)}
                  >
                    {confirmation.cancel}
                  </Clickable>
                  <Clickable as="button" variant="secondary" type="submit">
                    {confirmation.confirm}
                  </Clickable>
                </DialogFooter>
              </DialogContent>
            </DialogPortal>
          </Dialog>
        ) : null}
      </FormProvider>
    </>
  );
}
