import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import useListContext from "./context";

import { useFilterNavigation } from "./useFilterNavigation";
import Order from "./Order";
import { Form } from "./Form";
import Sort from "./Sort";
import SearchButton from "./SearchButton";
import type { ChildrenProps, DataTypes } from "@/utils/models/types";
import { useFilterDefaultValues } from "./useFilterDefaultValues";

type FieldTuple = [string, DataTypes, string?, string?];

export default function Filter({
  children,
  fields,
}: ChildrenProps & { fields: FieldTuple[] }) {
  const { canModifyUrl, setFields } = useListContext();

  const defaultValues = useFilterDefaultValues(fields);

  const { handleFilterSubmit } = useFilterNavigation(fields);

  const methods = useForm({ defaultValues });

  useEffect(() => {
    setFields(fields);
  }, [fields, setFields]);

  if (!canModifyUrl) return null;

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
