/* eslint-disable @typescript-eslint/no-explicit-any */
import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import type { OptionalChildrenProps } from "@/utils/models/types";
import { FormProvider, useForm, type Resolver } from "react-hook-form";

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
    formState: { isSubmitting },
  } = methods;

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
        <form
          method="post"
          onSubmit={handleSubmit(() => {})}
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
        </form>
      </FormProvider>
    </>
  );
}
