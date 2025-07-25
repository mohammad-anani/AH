import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import type {
  EntityKey,
  Key,
  RowTemplate,
  SearchParamsState,
  SelectedObjectState,
  Setter,
} from "@/utils/models/types/util";
import ListPage from "../ListPage";

type ListProps<T extends EntityKey> = {
  entity: T;
  data: [rowTypesObject[T][], number];
  selectedObjectState: SelectedObjectState<T>;
  canAdd: boolean;
  rowTemplate: RowTemplate<T>;
  filterFields: Key[];
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
    <div className="space-y-2! space-x-2!">
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
      />
    </div>
  );
}
