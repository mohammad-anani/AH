import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import type { SelectedObjectState } from "@/utils/models/types/utils/selectorTypes";

import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { Setter } from "@/utils/models/types/utils/basics";
import ListPage from "../ListPage";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";

type ListProps<T extends EntityKey> = {
  entity: T;
  data: [rowTypesObject[T][], number];
  selectedObjectState: SelectedObjectState<T>;
  canAdd: boolean;
  rowTemplate: RowTemplate<T>;
  filterFields: FilterKey[];
  searchParamsState: SearchParamsState;
  onDetailsClick: (id: number) => void;
  onSelect: (item: rowTypesObject[T]) => void;
  path: string;
};

export default function ListSection<T extends EntityKey>({
  entity,
  data,
  selectedObjectState,
  canAdd,
  rowTemplate,
  filterFields,
  searchParamsState,
  onDetailsClick,
  onSelect,
  path,
}: ListProps<T>) {
  return (
    <div className="max-h-[380px] space-y-2! space-x-2!">
      <ListPage<T>
        entity={entity}
        data={data}
        canAdd={canAdd}
        rowTemplate={rowTemplate}
        filterFields={filterFields}
        searchParamsState={searchParamsState}
        selectedObjectState={
          selectedObjectState as [
            rowTypesObject[EntityKey],
            Setter<rowTypesObject[EntityKey] | undefined>,
          ]
        }
        onDetailsClick={onDetailsClick}
        dataLink={path}
        withBack={false}
        onSelect={onSelect}
        itemsClassName={data?.[1] > 8 ? "overflow-y-scroll max-h-[300px]" : ""}
      />
    </div>
  );
}
