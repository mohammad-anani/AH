import Controller from "@/ui/customComponents/Controller";
import Selector from "../entityComponents/Selector";

import type { SelectedObjectState } from "@/utils/models/types/utils/selectorTypes";

import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useEffect, useState } from "react";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

import type { Role } from "@/utils/models/types/utils/Form&Filter";
import { dataFields as adminDataFields } from "@/utils/models/componentsConfig/admin/dataFields";
import { dataFields as doctorDataFields } from "@/utils/models/componentsConfig/doctor/dataFields";
import { dataFields as receptionistDataFields } from "@/utils/models/componentsConfig/receptionist/dataFields";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

interface SelectorInputProps {
  fieldKey: string;
  label: string;
  data: [EntityKey, RouteConfig<EntityKey>, Role];
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
  data: [T, RouteConfig<T>, Role];
  disabled: boolean;
  fieldProps: {
    field: {
      value: unknown;
      onChange: (value: unknown) => void;
    };
  };
}) {
  const [selected, setSelected] = useState<
    rowTypesObject[T] | undefined | { ID: number }
  >({
    ID: fieldProps.field.value as number,
  });

  useEffect(() => {
    fieldProps.field.onChange(selected?.["ID"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const [entity, entityObject, role] = data;

  return (
    <Selector
      entity={entity}
      disabled={disabled}
      canAdd={false}
      entityObject={entityObject}
      selectedObjectState={
        [selected, setSelected] as SelectedObjectState<EntityKey>
      }
      dataFieldsObject={
        role === "Admin"
          ? adminDataFields
          : role === "Receptionist"
            ? receptionistDataFields
            : doctorDataFields
      }
    />
  );
}
