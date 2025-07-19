/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import List from "./List";
import Clickable from "../customComponents/Clickable";
import useFilter from "@/utils/customHooks/useFilter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "../../components/ui/dialog";
import { DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import FilterEntities from "./FilterEntities";
import type { Key } from "@/utils/models/types";
import H2 from "../customComponents/H2";
import DetailsButton from "./DetailsButton";

export default function ListPage<T extends { [key: string]: any }>({
  title,
  canAdd,
  emptyText = `No ${title.substring(0, title.length - 1)}`,
  rowTemplate,
  filterFields,
}: {
  title: string;
  canAdd: boolean;
  emptyText?: string;

  rowTemplate: [string[], (item: T) => any[], number[]];

  filterFields: Key[];
  backUrl?: string;
}) {
  const [items, itemsCount] = useLoaderData();

  const { isFilterOpen, setIsFilterOpen } = useFilter();

  const [headerFields, dataFields, gridFr] = rowTemplate;

  const gridTemplate = [...gridFr, 1].map((fr) => `${fr}fr`).join(" ");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: gridTemplate,
  };

  const Header = (
    <li key="Header" style={gridStyle}>
      {headerFields.map((field) => (
        <span>{field}</span>
      ))}
    </li>
  );

  const render = (item: T) => (
    <li style={gridStyle} key={item?.["ID"] || item[0]}>
      {dataFields(item).map((field) => (
        <span>{field}</span>
      ))}
      <DetailsButton ID={item["ID"]} />
    </li>
  );

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <H2 className="mb-6">{title}</H2>

      {canAdd ? (
        <Clickable as="Link" variant="primary" to="add" className="text-sm!">
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
      <List items={items}>
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
        <List.Items<T>
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
