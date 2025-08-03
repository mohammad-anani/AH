import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import { FormProvider } from "react-hook-form";
import { Form as RouterForm, type SubmitTarget } from "react-router-dom";

import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
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

type FormProps<T extends EntityKey> = {
  entity: T;
  submitText?: string;
  formConfig: FormKey<T>[];
  submittingText?: string;
  headerWidth?: number;
  withHeader?: boolean;
  confirmation?: {
    title: string;
    content: string;
    cancel: string;
    confirm: string;
  };
};

export default function AddUpdateForm<T extends EntityKey>({
  entity,
  submitText = "Save",
  formConfig,
  submittingText = "Submitting...",
  confirmation,
  withHeader = true,
}: FormProps<T>) {
  const { title, methods, handleSubmit, submit, isAdd, isSubmitting } =
    useAddUpdateForm(entity);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <>
      {withHeader ? (
        <>
          <Clickable className="text-sm!" as="Back" variant="secondary">
            Back
          </Clickable>

          <H2 className="mb-6">{title}</H2>
        </>
      ) : null}
      <FormProvider {...methods}>
        <RouterForm
          replace
          method="POST"
          onSubmit={handleSubmit((data) => {
            submit(data as SubmitTarget, {
              method: "POST",
              encType: "application/json",
            });
          })}
          className={`grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold`}
        >
          <Form fields={formConfig} mode={isAdd ? "add" : "update"} />
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
