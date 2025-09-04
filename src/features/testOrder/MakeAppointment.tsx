import Clickable from "@/ui/customComponents/Clickable";
import H2 from "@/ui/customComponents/H2";
import {
  Form as RouterForm,
  useFetcher,
  useOutletContext,
  useSubmit,
} from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";
import { type SubmitTarget } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { TestAppointmentSchema } from "@/utils/models/zod/schemas";
import type { TestOrder } from "@/utils/models/types/normal/types";
import { useEffect } from "react";
import Card from "@/ui/entityComponents/Card";
import { testType } from "@/utils/models/componentsConfig/receptionist";
import TemporalInput from "@/ui/form-inputs/TemporalInput";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { fetchingPaths } from "@/utils/models/componentsConfig/fetchingPaths";

export default function MakeAppointment() {
  const testOrder = useOutletContext<TestOrder>();
  const methods = useForm({
    resolver: zodResolver(
      TestAppointmentSchema.pick({ Service: true }).transform((data) => ({
        Service: { ScheduledDate: data.Service.ScheduledDate },
      })),
    ),
  });
  const submit = useSubmit();

  const fetcher = useFetcher();

  // Log test order data in development
  if (import.meta.env.DEV) {
    // removed console.log
  }

  useEffect(() => {
    if (testOrder?.TestType?.ID) {
      fetcher.load(fetchingPaths["TestType"] + "/" + testOrder?.TestType?.ID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testOrder?.TestType?.ID]);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = methods;

  // Loading state while fetching test type data
  if (fetcher.state === "loading") {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-lg">Loading test type information...</div>
      </div>
    );
  }

  // Error state if data fetch failed
  if (!fetcher.data && fetcher.state === "idle") {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-lg text-red-500">
          Failed to load test type information
        </div>
      </div>
    );
  }

  // Don't render if no data yet
  if (!fetcher.data) return null;
  return (
    <>
      <>
        <Clickable className="text-sm!" as="Back" variant="secondary">
          Back
        </Clickable>

        <H2 className="mb-6">Add Test Appointment</H2>
      </>

      <Card
        isModal={true}
        canDelete={false}
        canEdit={false}
        data={fetcher?.data}
        title="TestType"
        dataFields={testType.dataFields as DataFields<EntityKey>}
      />
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
          <TemporalInput
            fieldKey="ScheduledDate"
            label="Scheduled Date:"
            data="datetime"
          />

          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            Reserve
          </Clickable>
        </RouterForm>
      </FormProvider>
    </>
  );
}
