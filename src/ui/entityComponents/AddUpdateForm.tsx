/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import type { OptionalChildrenProps } from "@/utils/models/types";
import { FormProvider, useForm } from "react-hook-form";
import { Form, useNavigation, useSubmit } from "react-router-dom";
import type { Schema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import BackNavigator from "../customComponents/BackNavigator";

export default function AddUpdateForm({
  title,
  backLink = "",
  headerWidth = 150,
  schema,
  submitText = "Save",
  submittingText = "Submitting...",
  defaultValues = null,
  children,
}: {
  title: string;
  backLink?: string;
  schema: Schema<any, any>;
  defaultValues: any;
  submitText?: string;
  submittingText?: string;
  headerWidth?: number;
} & OptionalChildrenProps) {
  if (Array.isArray(defaultValues)) {
    return null;
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    criteriaMode: "all",
  });
  const {
    handleSubmit,
    formState: { isSubmitting: isSub },
  } = methods;
  const submit = useSubmit();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || isSub;

  return (
    <>
      {backLink === "" ? (
        <BackNavigator pagesBack={1}>
          <Clickable
            className="text-sm!"
            as="button"
            variant="secondary"
            to={backLink}
          >
            Back
          </Clickable>
        </BackNavigator>
      ) : (
        <Clickable
          className="text-sm!"
          as="Link"
          variant="secondary"
          to={backLink}
        >
          Back
        </Clickable>
      )}

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
              ? submittingText
              : submitText !== "Save"
                ? submitText
                : !defaultValues["ID"]
                  ? "Add"
                  : "Save"}
          </Clickable>
        </Form>
      </FormProvider>
    </>
  );
}
