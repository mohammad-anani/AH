import { useLoaderData } from "react-router-dom";
import List from "./List";
import Clickable from "../customComponents/Clickable";

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "../../components/ui/dialog";
import { DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import FilterEntities from "../customComponents/FilterEntities";
import type { EntityKey, Key, Setter } from "@/utils/models/types/util";
import H2 from "../customComponents/H2";
import { type Primitive } from "zod";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

import { Check, Info } from "lucide-react";
import useFilter from "@/ui/entityComponents/listComponents/useFilter";

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
}: {
  entity: EntityKey;
  canAdd: boolean;
  withBack: boolean;
  data?: [rowTypesObject[T][], number];
  rowTemplate: [string[], (item: rowTypesObject[T]) => Primitive[], number[]];
  onSelect?: (item: rowTypesObject[T]) => void;
  onDetailsClick?: (ID: number) => void;
  filterFields: Key[];
  emptyText?: string;
  canModifyUrl?: boolean;
  searchParamsState?: [URLSearchParams, Setter<URLSearchParams> | undefined];

  selectedObjectState?: [
    rowTypesObject[EntityKey],
    Setter<rowTypesObject[EntityKey] | undefined>,
  ];
  dataLink?: string;
}) {
  const loaderData = useLoaderData();

  const [isFilterOpen, setIsFilterOpen] = useFilter(
    searchParamsState?.[0].toString(),
  );
  const [items, itemsCount] = searchParamsState && data ? data : loaderData;

  if (!items) return null;

  const [headerFields, dataFields, gridFr] = rowTemplate;

  const gridTemplate = [...gridFr, ...(searchParamsState ? [1, 2] : [1])]
    .map((fr) => `${fr}fr`)
    .join(" ");

  const gridStyle = {
    display: "grid",
    gap: "5px",
    gridTemplateColumns: gridTemplate,
  };

  const Header = (
    <li key="Header" style={gridStyle}>
      {headerFields.map((field) => (
        <span>{field}</span>
      ))}
    </li>
  );

  const render = (item: rowTypesObject[T]) => {
    return (
      <li style={gridStyle} key={item?.["ID"]}>
        {dataFields(item ?? undefined).map((field) => (
          <span>{String(field)}</span>
        ))}
        <Clickable
          className="flex! items-center gap-x-1"
          as={searchParamsState ? "button" : "Link"}
          variant="secondary"
          {...(searchParamsState
            ? {
                onClick: () => {
                  onDetailsClick?.(item.ID);
                },
              }
            : { to: `${item?.["ID"]}` })}
        >
          <Info className="*:text-primary! h-[20px] w-[20px]" />
          Details
        </Clickable>

        {searchParamsState &&
        item?.["ID"] !== selectedObjectState?.[0]?.["ID"] ? (
          <Clickable
            className="flex! items-center gap-x-1"
            as="button"
            variant="secondary"
            onClick={() => {
              onSelect?.(item ?? undefined);
            }}
          >
            <Check className="*:text-primary! h-[20px] w-[20px]" />
            Select
          </Clickable>
        ) : null}
      </li>
    );
  };

  const title =
    (entity.startsWith("Test") ? entity.replace("Test", "Test ") : entity) +
    "s";

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
                        {"Filter " + entity}
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
