import List from "./List";
import Clickable from "../customComponents/Clickable";

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "../../components/ui/dialog";
import { DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import FilterEntities from "../customComponents/FilterEntities";
import type {
  EntityKey,
  Key,
  RowTemplate,
  SearchParamsState,
  SelectedObjectState,
  Setter,
} from "@/utils/models/types/util";
import H2 from "../customComponents/H2";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

import useListPage from "./hooks/useListPage";

type ListPageProps<T extends EntityKey> = {
  entity: EntityKey;
  canAdd: boolean;
  withBack: boolean;
  data?: [rowTypesObject[T][], number];
  rowTemplate: RowTemplate<T>;
  onSelect?: (item: rowTypesObject[T]) => void;
  onDetailsClick?: (ID: number) => void;
  filterFields: Key[];
  emptyText?: string;
  canModifyUrl?: boolean;
  searchParamsState?: SearchParamsState;

  selectedObjectState?: [
    rowTypesObject[EntityKey],
    Setter<rowTypesObject[EntityKey] | undefined>,
  ];
  dataLink?: string;
};

export default function ListPage<T extends EntityKey>({
  entity,
  canAdd,
  emptyText = `No ${entity}s`,
  rowTemplate,
  filterFields,
  canModifyUrl = true,
  searchParamsState = undefined,
  selectedObjectState,
  dataLink,
  data,
  onSelect,
  withBack = false,
  onDetailsClick,
}: ListPageProps<T>) {
  const {
    isFilterOpen,
    setIsFilterOpen,
    items,
    itemsCount,
    Header,
    render,
    title,
  } = useListPage(
    entity as T,
    rowTemplate,
    searchParamsState,
    data,
    onDetailsClick,
    selectedObjectState as SelectedObjectState<T>,
    onSelect,
  );

  return (
    <>
      {!searchParamsState ? (
        <>
          {withBack ? (
            <Clickable className="text-sm!" as="Back" variant="secondary">
              Back
            </Clickable>
          ) : null}
          <H2 className="mb-6">{title}</H2>
        </>
      ) : null}
      {canAdd ? (
        <Clickable
          as="Link"
          variant="primary"
          to={searchParamsState ? dataLink + "/add" : "add"}
          className="text-sm!"
        >
          Add
        </Clickable>
      ) : null}
      <Clickable
        as="button"
        variant="primary"
        className="text-sm!"
        onClick={() => setIsFilterOpen(true)}
      >
        Filter
      </Clickable>
      <List<rowTypesObject[T]>
        items={items}
        canModifyUrl={canModifyUrl}
        searchParamsState={
          searchParamsState as
            | [URLSearchParams, (params: URLSearchParams) => void]
            | undefined
        }
        setObject={
          selectedObjectState
            ? (v) => v !== undefined && selectedObjectState[1](v)
            : undefined
        }
      >
        <List.ClearFilter>
          <Clickable as="button" className="text-sm!" variant="secondary">
            Clear
          </Clickable>
        </List.ClearFilter>
        {isFilterOpen ? (
          <>
            <Dialog
              defaultOpen={true}
              onOpenChange={(open) => {
                if (!open) setIsFilterOpen(false);
              }}
            >
              <DialogPortal>
                <DialogContent className="w-auto pt-4">
                  <DialogHeader>
                    <DialogTitle>
                      <H2 className="text-left text-2xl!">
                        {"Filter " + title + "s"}
                      </H2>
                    </DialogTitle>
                  </DialogHeader>
                  <FilterEntities fields={filterFields} />
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </>
        ) : null}

        <List.Items<rowTypesObject[T]>
          render={render}
          Header={Header}
          itemsCount={itemsCount}
          emptyText={emptyText}
        />
        <List.Pagination itemsCount={itemsCount} />
      </List>
    </>
  );
}
