import useAddUpdateForm from "@/ui/entityComponents/hooks/useAddUpdateForm";
import { AddAppointmentFromPreviousSchema } from "@/utils/models/zod/addSchemas/services/appointmentFromPrevious";
import { Controller } from "react-hook-form";
import { formatTitle } from "@/utils/formatters/formatTitle";

export default function ReserveFollowUpForm() {
  const { title, methods, handleSubmit, submit, isSubmitting } =
    useAddUpdateForm(
      "Appointment",
      AddAppointmentFromPreviousSchema,
      "Reserve Follow-up Appointment",
      true,
    );

  const onSubmit = (data: any) => {
    submit(data, { method: "post" });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Scheduled Date
          </label>
          <Controller
            name="ScheduledDate"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <>
                <input
                  {...field}
                  type="datetime-local"
                  className="w-full rounded-md border border-gray-300 p-2"
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="mt-1 text-sm text-red-500">{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Notes (Optional)
          </label>
          <Controller
            name="Notes"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <>
                <textarea
                  {...field}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-2"
                  disabled={isSubmitting}
                  placeholder="Add any notes for the follow-up appointment..."
                />
                {error && (
                  <p className="mt-1 text-sm text-red-500">{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Reserving..." : "Reserve Follow-up"}
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-md bg-gray-500 px-6 py-2 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
