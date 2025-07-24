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
import DetailsButton from "../customComponents/DetailsButton";
import type { Primitive } from "zod";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

import { Check } from "lucide-react";
import useFilter from "@/ui/entityComponents/listComponents/useFilter";

export default function ListPage<T extends EntityKey>({
  title,
  canAdd,
  emptyText = `No ${title}s`,
  rowTemplate,
  filterFields,
  canModifyUrl = true,
  UrlState = undefined,
  data,
  isSelector = false,
  selectedObject,
  detailsLink,
  onSelect,
  withBack = false,
}: {
  title: EntityKey;
  canAdd: boolean;
  withBack: boolean;
  rowTemplate: [string[], (item: rowTypesObject[T]) => Primitive[], number[]];
  onSelect?: (item: rowTypesObject[T]) => void;

  filterFields: Key[];
  emptyText?: string;
  canModifyUrl?: boolean;
  UrlState?: [URLSearchParams, (params: URLSearchParams) => void];
  data?: rowTypesObject[T];
  isSelector?: boolean;
  selectedObject?: [
    rowTypesObject[EntityKey],
    Setter<rowTypesObject[EntityKey] | undefined>,
  ];
  detailsLink?: string;
}) {
  const loaderData = useLoaderData();

  const [items, itemsCount] = isSelector ? data : loaderData;

  const [isFilterOpen, setIsFilterOpen] = useFilter(
    filterFields,
    `Filter${title}s`,
  );
  const [headerFields, dataFields, gridFr] = rowTemplate;

  const gridTemplate = [...gridFr, ...(isSelector ? [1, 2] : [1])]
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

  const render = (item: rowTypesObject[T]) => (
    <li style={gridStyle} key={item?.["ID"]}>
      {dataFields(item).map((field) => (
        <span>{String(field)}</span>
      ))}
      <DetailsButton link={detailsLink} ID={item["ID"]} />

      {isSelector &&
      (!selectedObject?.[0] || item["ID"] !== selectedObject?.[0]["ID"]) ? (
        <Clickable
          className="flex! items-center gap-x-1"
          as="button"
          variant="secondary"
          onClick={() => {
            onSelect?.(item);
          }}
        >
          <Check className="*:text-primary! h-[20px] w-[20px]" />
          Select
        </Clickable>
      ) : null}
    </li>
  );

  const fixedTitle = title.startsWith("Test")
    ? title.replace("Test", "Test ")
    : title;

  return (
    <>
      {!isSelector ? (
        <>
          {withBack ? (
            <Clickable className="text-sm!" as="Back" variant="secondary">
              Back
            </Clickable>
          ) : null}
          <H2 className="mb-6">{fixedTitle}s</H2>
        </>
      ) : null}
      {canAdd ? (
        <Clickable
          as="Link"
          variant="primary"
          to={detailsLink ? detailsLink + "/add" : "add"}
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
        UrlState={UrlState}
        isSelector={isSelector}
        setObject={
          selectedObject
            ? (v) => v !== undefined && selectedObject[1](v)
            : undefined
        }
      >
        <List.ClearFilter>
          <Clickable as="button" className="text-sm!" variant="secondary">
            Clear
          </Clickable>
        </List.ClearFilter>
        {/* isFilterOpen ? */}
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
                        {"Filter " + title}
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
