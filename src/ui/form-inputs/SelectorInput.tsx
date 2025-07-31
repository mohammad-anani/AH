import Controller from "@/ui/customComponents/Controller";
import Selector from "../entityComponents/Selector";
import type {
  dataFields,
  EntityKey,
  Key,
  RowTemplate,
  SelectorConfig,
} from "@/utils/models/types/util";
import { useEffect, useState } from "react";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

interface SelectorInputProps {
  fieldKey: string;
  label: string;
  data: [
    EntityKey,
    SelectorConfig<EntityKey>,
    RowTemplate<EntityKey>,
    dataFields<EntityKey>,
    Key[],
  ];
}

export default function SelectorInput({
  fieldKey,
  label,
  data,
}: SelectorInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Controller
        name={fieldKey}
        renderField={({ field }) => (
          <SelectorField data={data} fieldProps={{ field }} />
        )}
      />
    </>
  );
}

function SelectorField<T extends EntityKey>({
  fieldProps,
  data,
}: {
  data: [T, SelectorConfig<T>, RowTemplate<T>, dataFields<T>, Key[]];
  fieldProps: {
    field: {
      value: unknown;
      onChange: (value: unknown) => void;
    };
  };
}) {
  const [selected, setSelected] = useState<rowTypesObject[T] | undefined>({
    ID: fieldProps.field.value as number,
  });

  useEffect(() => {
    fieldProps.field.onChange(selected?.["ID"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const [entity, selectorConfig, rowTemplate, dataFields, filterFields] = data;

  return (
    <Selector
      entity={entity}
      canAdd={false}
      {...selectorConfig}
      rowTemplate={rowTemplate}
      dataFields={dataFields}
      filterFields={filterFields}
      selectedObjectState={[selected, setSelected]}
    />
  );
}
