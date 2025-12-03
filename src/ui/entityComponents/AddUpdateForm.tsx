import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";
import { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import {
  Form as RouterForm,
  type SubmitTarget,
  useBlocker,
} from "react-router-dom";

import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import Form from "./Form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import type { z } from "zod";
import useAddUpdateForm from "./hooks/useAddUpdateForm";

type FormProps<T extends EntityKey> = {
  entity: T;
  submitText?: string;
  formConfig: FormKey<T>[];
  submittingText?: string;
  headerWidth?: number;
  withHeader?: boolean;
  schema?: z.ZodTypeAny;
  title?: string;
  isAdd?: boolean;
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
  schema,
  title,
  isAdd: customIsAdd,
}: FormProps<T>) {
  const {
    title: hookTitle,
    methods,
    handleSubmit,
    submit,
    isAdd,
    isSubmitting,
  } = useAddUpdateForm(entity, schema, title, customIsAdd);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isNavigationDialogOpen, setIsNavigationDialogOpen] = useState(false);
  const [blockedNavigation, setBlockedNavigation] = useState<{
    proceed: () => void;
    reset: () => void;
  } | null>(null);

  const hasUnsavedChanges =
    methods.formState.isDirty && !methods.formState.isSubmitted;

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    const shouldBlock =
      hasUnsavedChanges &&
      !isSubmitting &&
      currentLocation.pathname !== nextLocation.pathname;

    console.log("Blocker check:", {
      hasUnsavedChanges,
      isSubmitting,
      shouldBlock,
    });

    return shouldBlock;
  });

  useEffect(() => {
    if (blocker.state === "blocked") {
      setBlockedNavigation({
        proceed: () => {
          setIsNavigationDialogOpen(false);
          blocker.proceed();
        },
        reset: () => {
          setIsNavigationDialogOpen(false);
          blocker.reset();
        },
      });
      setIsNavigationDialogOpen(true);
    }
  }, [blocker]);

  const handleNavigationConfirm = () => {
    if (blockedNavigation) {
      blockedNavigation.proceed();
    }
  };

  const handleNavigationCancel = () => {
    if (blockedNavigation) {
      blockedNavigation.reset();
    }
  };



  return (
    <>
      {withHeader ? (
        <>
          <Clickable className="text-sm!" as="Back" variant="secondary">
            Back
          </Clickable>

          <H2 className="mb-6">{hookTitle}</H2>
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
          className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold"
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

        {/* Navigation blocking dialog */}
        <Dialog
          open={isNavigationDialogOpen}
          onOpenChange={setIsNavigationDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Unsaved Changes</DialogTitle>
              <DialogDescription>
                You have unsaved changes that will be lost if you leave this
                page. Are you sure you want to continue?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Clickable
                as="button"
                variant="secondary"
                onClick={handleNavigationCancel}
              >
                Stay on Page
              </Clickable>
              <Clickable
                as="button"
                variant="primary"
                onClick={handleNavigationConfirm}
              >
                Leave Page
              </Clickable>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Form submission confirmation dialog */}
        {confirmation ? (
          <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{confirmation.title}</DialogTitle>
                <DialogDescription>{confirmation.content}</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Clickable
                  as="button"
                  variant="secondary"
                  onClick={() => setIsConfirmOpen(false)}
                >
                  {confirmation.cancel}
                </Clickable>
                <Clickable as="button" variant="primary" type="submit">
                  {confirmation.confirm}
                </Clickable>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : null}
      </FormProvider>
    </>
  );
}
