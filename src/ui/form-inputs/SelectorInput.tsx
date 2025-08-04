import Controller from "@/ui/customComponents/Controller";
import Selector from "../entityComponents/Selector";
import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import type { RowTemplate } from "@/utils/models/componentsConfig/routeConfig";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useEffect, useState } from "react";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

import type { Role } from "@/utils/models/componentsConfig/utils/filterReusableFields";
import { dataFields } from "@/utils/models/componentsConfig/admin/dataFields";

interface SelectorInputProps {
  fieldKey: string;
  label: string;
  data: [
    EntityKey,
    SelectorConfig<EntityKey>,
    RowTemplate<EntityKey>,
    DataFields<EntityKey>,
    FilterKey[],
    Role,
  ];
  disabled: boolean;
}

export default function SelectorInput({
  fieldKey,
  label,
  data,
  disabled,
}: SelectorInputProps) {
  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <Controller
        name={fieldKey}
        renderField={({ field }) => (
          <SelectorField
            data={data}
            disabled={disabled}
            fieldProps={{ field }}
          />
        )}
      />
    </>
  );
}

function SelectorField<T extends EntityKey>({
  fieldProps,
  data,
  disabled,
}: {
  data: [
    T,
    SelectorConfig<T>,
    RowTemplate<T>,
    DataFields<T>,
    FilterKey[],
    Role,
  ];
  disabled: boolean;
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

  const [entity, selectorConfig, rowTemplate, supDataFields, filterFields] =
    data;

  return (
    <Selector
      entity={entity}
      disabled={disabled}
      canAdd={false}
      {...selectorConfig}
      rowTemplate={rowTemplate}
      dataFields={supDataFields}
      filterFields={filterFields}
      selectedObjectState={[selected, setSelected]}
      dataFieldsObject={dataFields}
    />
  );
}
//to add role changing when destructing data
