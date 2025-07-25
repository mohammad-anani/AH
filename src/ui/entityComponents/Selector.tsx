import { type EntityKey, type Setter } from "@/utils/models/types/util";
import { useEffect, useState } from "react";

import ListPage from "./ListPage";
import { listPageConfig } from "@/utils/models/listPageConfig";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import H2 from "../customComponents/H2";
import SelectorTrigger from "./selectorComponents/SelectorTrigger";
import { useFetcher } from "react-router-dom";
import Card from "./Card";
import { cardConfig } from "@/utils/models/cardConfig";
import Clickable from "../customComponents/Clickable";

export default function Selector<T extends EntityKey>({
  entity,
  path,
  selectedDisplay,
  selectedObjectState,
  canAdd = false,
}: {
  entity: T;
  path: string;
  selectedDisplay: (item: rowTypesObject[T]) => string;
  selectedObjectState: [
    rowTypesObject[T] | undefined,
    Setter<rowTypesObject[T] | undefined>,
  ];
  canAdd?: boolean;
}) {
  const [object, setObject] = selectedObjectState;

  const searchParamsState: [URLSearchParams, Setter<URLSearchParams>] =
    useState<URLSearchParams>(new URLSearchParams());

  const [isOpen, setIsOpen] = useState(false);

  const [CardID, setCardID] = useState<number | undefined>(undefined);

  const [rowTemplate, filterFields] = listPageConfig[entity];

  const [searchParams] = searchParamsState ?? [];

  const paramString = searchParams?.toString() ?? "";

  const listFetcher = useFetcher();

  useEffect(() => {
    listFetcher.load(`${path}/list?${paramString}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramString, path]);

  useEffect(() => {
    if (searchParamsState) {
      if (
        listFetcher.data?.[0] &&
        object?.["ID"] &&
        Object.keys(object).length === 1 &&
        Object.keys(object)[0] === "ID"
      ) {
        setObject?.(
          (listFetcher.data?.[0] as rowTypesObject[T][])?.find(
            (item) => item?.["ID"] === object?.["ID"],
          ),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFetcher.data?.[0], CardID]);

  const cardFetcher = useFetcher();

  useEffect(() => {
    if (CardID) cardFetcher.load(`${path}/${CardID}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CardID]);

  const title = entity.startsWith("Test")
    ? entity.replace("Test", "Test ")
    : entity;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <SelectorTrigger
          object={object}
          setObject={setObject}
          selectedDisplay={selectedDisplay}
          entity={entity}
        />
        <DialogPortal>
          <DialogContent className="w-500 pt-4 text-left!">
            <DialogHeader>
              <DialogTitle>
                <H2 className="text-left text-2xl!">{`Select ${title}`}</H2>
              </DialogTitle>
            </DialogHeader>
            {!CardID || !cardFetcher.data ? (
              <div className="space-y-2! space-x-2!">
                <ListPage<T>
                  entity={entity}
                  data={listFetcher.data}
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
                  onDetailsClick={setCardID}
                  dataLink={path}
                  withBack={false}
                  onSelect={(item) => {
                    setObject(item);
                    setIsOpen(false);
                  }}
                />
              </div>
            ) : (
              <div className="space-y-2! space-x-2!">
                <Clickable
                  as="button"
                  variant="secondary"
                  onClick={() => setCardID(undefined)}
                >
                  Back
                </Clickable>
                {object?.["ID"] !== CardID ? (
                  <Clickable
                    as="button"
                    variant="primary"
                    onClick={() => {
                      setObject({ ID: CardID });
                      setCardID(undefined);
                    }}
                  >
                    Select
                  </Clickable>
                ) : null}
                <div
                  className={`max-h-[300px] ${cardConfig[entity]["dataFields"](cardFetcher.data).length > 8 ? "overflow-y-scroll" : ""}`}
                >
                  <Card
                    canEdit={false}
                    canDelete={false}
                    title={entity}
                    data={cardFetcher.data}
                    {...cardConfig[entity]}
                    isModal={true}
                  />
                </div>
              </div>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
}
