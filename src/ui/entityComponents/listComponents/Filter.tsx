import { FormProvider, useForm } from "react-hook-form";
import useListContext from "./context";

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import type { ChildrenProps, Setter } from "@/utils/models/types/utils/basics";
import { useFilterDefaultValues } from "../hooks/useFilterDefaultValues";
import { useFilterNavigation } from "../hooks/useFilterNavigation";
import { Form } from "./Form";
import Order from "./Order";
import SearchButton from "./SearchButton";
import Sort from "./Sort";

export default function Filter({
  children,
  fields,
}: ChildrenProps & { fields: FilterKey[] }) {
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
