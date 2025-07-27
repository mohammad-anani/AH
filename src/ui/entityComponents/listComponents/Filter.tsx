import { FormProvider, useForm } from "react-hook-form";
// import { useEffect } from "react";
import useListContext from "./context";

import Order from "./Order";
import { Form } from "./Form";
import Sort from "./Sort";
import SearchButton from "./SearchButton";
import type { ChildrenProps, Key, Setter } from "@/utils/models/types/util";
import { useFilterDefaultValues } from "../hooks/useFilterDefaultValues";
import { useFilterNavigation } from "../hooks/useFilterNavigation";

export default function Filter({
  children,
  fields,
}: ChildrenProps & { fields: Key[] }) {
  const { canModifyUrl, setFields, searchParamsState } = useListContext();

  const defaultValues = useFilterDefaultValues(fields);

  const { handleFilterSubmit } = useFilterNavigation(
    fields,
    searchParamsState as [URLSearchParams, Setter<URLSearchParams>] | undefined,
  );

  const methods = useForm({ defaultValues: defaultValues ?? {} });

  setFields(fields);

  if (!canModifyUrl && !searchParamsState) return null;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFilterSubmit)}
        className="flex flex-col gap-y-5 text-xl"
      >
        {children}
      </form>
    </FormProvider>
  );
}

Filter.Order = Order;
Filter.Sort = Sort;
Filter.Form = Form;
Filter.SearchButton = SearchButton;
