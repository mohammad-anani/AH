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
import { TemporalInput } from "@/ui/form-inputs";

export default function MakeAppointment() {
  const methods = useForm({ resolver: zodResolver(TestAppointmentSchema) });
  const submit = useSubmit();

  const testOrder = useOutletContext<TestOrder>();

  const fetcher = useFetcher();

  console.log(testOrder);

  useEffect(() => {
    fetcher.load("/receptionist/tests/types/" + testOrder.TestTypeID);
  }, []);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

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
        dataFields={testType.dataFields}
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
