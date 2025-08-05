import {
  Dialog,
  DialogPortal,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
// CardForm.tsx
import { CardElement } from "@stripe/react-stripe-js";

import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";
import useAddUpdateForm from "@/ui/entityComponents/hooks/useAddUpdateForm";

import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Form as RouterForm, type SubmitTarget } from "react-router-dom";

export default function Pay() {
  const { methods, handleSubmit, submit, isSubmitting } =
    useAddUpdateForm("Payment");

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  //TO FINISH OFF AFTER BACKEND

  return (
    <>
      <>
        <Clickable className="text-sm!" as="Back" variant="secondary">
          Back
        </Clickable>

        <H2 className="mb-6">Pay</H2>
      </>

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
          <div style={{ minHeight: "100px", minWidth: "300px" }}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": { color: "#a0aec0" },
                  },
                  invalid: { color: "#fa755a" },
                },
              }}
            />
          </div>
          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type={"button"}
            onClick={() => setIsConfirmOpen(true)}
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Paying..." : "Pay"}
          </Clickable>
        </RouterForm>

        <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
          <DialogPortal>
            <DialogContent>
              <DialogTitle>
                <H2>Confirm Payment?</H2>
              </DialogTitle>
              <div className="flex justify-end space-x-2">
                <Clickable
                  as="button"
                  variant="secondary"
                  onClick={() => setIsConfirmOpen(false)}
                >
                  Cancel
                </Clickable>
                <Clickable as="button" variant="primary" type="submit">
                  Confirm
                </Clickable>
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </FormProvider>
    </>
  );
}
