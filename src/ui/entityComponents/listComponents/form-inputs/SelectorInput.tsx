import Controller from "@/ui/customComponents/Controller";
import Selector from "../../Selector";
import type { EntityKey } from "@/utils/models/types/util";
import { useEffect, useState } from "react";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import { selectorConfig } from "@/utils/models/selectorConfig";

interface SelectorInputProps {
  fieldKey: string;
  label: string;
  data: [EntityKey, string];
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
          <SelectorField
            entity={data[0]}
            fieldProps={{ field }}
            prefix={data[1]}
          />
        )}
      />
    </>
  );
}

function SelectorField<T extends EntityKey>({
  entity,
  fieldProps,
  prefix,
}: {
  entity: T;
  fieldProps: {
    field: {
      value: unknown;
      onChange: (value: unknown) => void;
    };
  };
  prefix?: string;
}) {
  const [selected, setSelected] = useState<rowTypesObject[T] | undefined>(
    undefined,
  );

  useEffect(() => {
    fieldProps.field.onChange(selected?.["ID"]);
  }, [selected]);
  return (
    <Selector
      entity={entity}
      canAdd={false}
      {...selectorConfig[entity]}
      selectedObject={[selected, setSelected]}
      ID={fieldProps.field.value as number}
      prefix={prefix}
    />
  );
}
