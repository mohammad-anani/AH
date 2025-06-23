/* eslint-disable @typescript-eslint/no-explicit-any */
import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import type { OptionalChildrenProps } from "@/utils/models/types";
import { FormProvider, useForm, type Resolver } from "react-hook-form";
import { Form, useNavigation, useSubmit } from "react-router-dom";

export default function AddUpdateForm({
  title,
  backLink,
  headerWidth = 150,
  resolver,
  defaultValues,
  children,
}: {
  title: string;
  backLink: string;
  resolver: Resolver<any>;
  defaultValues: any;
  headerWidth?: number;
} & OptionalChildrenProps) {
  const methods = useForm({ resolver, defaultValues });
  const {
    handleSubmit,
    formState: { isSubmitting: isSub },
  } = methods;

  const submit = useSubmit();
  const { state } = useNavigation();

  const isSubmitting = state === "submitting" || isSub;

  return (
    <>
      <Clickable
        className="text-sm!"
        as="Link"
        variant="secondary"
        to={backLink}
      >
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
          {children}
          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : !defaultValues["ID"]
                ? "Add"
                : "Save"}
          </Clickable>
        </Form>
      </FormProvider>
    </>
  );
}
