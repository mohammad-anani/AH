import Controller from "@/ui/customComponents/Controller";
import Selector from "../../Selector";
import type { EntityKey } from "@/utils/models/types/util";
import { useEffect, useState } from "react";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import { selectorConfig } from "@/utils/models/selectorConfig";

interface SelectorInputProps {
  fieldKey: string;
  label: string;
  data: EntityKey;
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
          <SelectorField entity={data} fieldProps={{ field }} />
        )}
      />
    </>
  );
}

function SelectorField<T extends EntityKey>({
  entity,
  fieldProps,
}: {
  entity: T;
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
  return (
    <Selector
      entity={entity}
      canAdd={false}
      {...selectorConfig[entity]}
      selectedObjectState={[selected, setSelected]}
    />
  );
}
