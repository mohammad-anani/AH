import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";
import useAddUpdateForm from "@/ui/entityComponents/hooks/useAddUpdateForm";
import { AddAppointmentFromPreviousSchema } from "@/utils/models/zod/addSchemas/services/appointmentFromPrevious";
import { FormProvider } from "react-hook-form";
import { Form as RouterForm, type SubmitTarget } from "react-router-dom";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function ReserveFollowUpForm() {
  const { title, methods, handleSubmit, submit, isSubmitting } =
    useAddUpdateForm(
      "Appointment",
      AddAppointmentFromPreviousSchema,
      "Reserve Follow-up Appointment",
      true,
    );

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
            submit(data as SubmitTarget, {
              method: "POST",
              encType: "application/json",
            });
          })}
          className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold"
        >
          <label htmlFor="ScheduledDate">Scheduled Date</label>
          <RegisteredInput name="ScheduledDate">
            <input id="ScheduledDate" type="datetime-local" required />
          </RegisteredInput>

          <label htmlFor="Notes">Notes</label>
          <RegisteredInput name="Notes">
            <textarea
              id="Notes"
              rows={4}
              placeholder="Add any notes for the follow-up appointment..."
            />
          </RegisteredInput>

          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Reserving..." : "Reserve Follow-up"}
          </Clickable>
        </RouterForm>
      </FormProvider>
    </>
  );
}
