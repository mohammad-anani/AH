import { useLoaderData } from "react-router-dom";
import List from "./List";
import Clickable from "./Clickable";
import useFilter from "@/utils/customHooks/useFilter";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader } from "../components/ui/dialog";
import { DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import FilterEntities from "./FilterEntities";
import type { Key } from "@/utils/models/types";
import H2 from "./H2";

export default function ListPage<T>({
  title,
  canAdd,
  emptyText,
  render,
  Header,
  filterFields,
  backUrl = "",
}: {
  title: string;
  canAdd: boolean;
  emptyText: string;
  render: (item: T, index: number) => React.ReactNode;
  Header: ReactNode;
  filterFields: Key[];
  backUrl?: string;
}) {
  const [items, itemsCount] = useLoaderData();

  const { isFilterOpen, setIsFilterOpen } = useFilter();

  return (
    <>
      {backUrl !== "" ? (
        <Clickable
          as="Link"
          to={backUrl}
          variant="secondary"
          className="text-sm!"
        >
          Back
        </Clickable>
      ) : null}
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
          itemsCount={itemsCount}
          emptyText={emptyText}
        >
          {Header}
        </List.Items>
        <List.Pagination itemsCount={itemsCount} />
      </List>
    </>
  );
}
