import Controller from "@/ui/customComponents/Controller";
import Selector from "../entityComponents/Selector";
import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import type { RowTemplate } from "@/utils/models/componentsConfig/routeConfig";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useEffect, useState } from "react";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

import { subLinks } from "@/utils/models/componentsConfig/admin/subLinks";
import type { Role } from "@/utils/models/componentsConfig/admin/utils/reusableFields";

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
  data: [
    T,
    SelectorConfig<T>,
    RowTemplate<T>,
    DataFields<T>,
    FilterKey[],
    Role,
  ];
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

  const [entity, selectorConfig, rowTemplate, dataFields, filterFields, role] =
    data;

  return (
    <Selector
      entity={entity}
      canAdd={false}
      {...selectorConfig}
      rowTemplate={rowTemplate}
      dataFields={dataFields}
      filterFields={filterFields}
      selectedObjectState={[selected, setSelected]}
      subLinksObject={role === "Admin" && subLinks}
      dataFieldsObject={role === "Admin" && dataFields}
    />
  );
}
