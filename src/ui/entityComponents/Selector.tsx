import { type EntityKey, type Setter } from "@/utils/models/types/util";
import { useEffect, useState, type ReactNode } from "react";
import Clickable from "../customComponents/Clickable";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import H2 from "../customComponents/H2";
import ListPage from "./ListPage";
import { listPageConfig } from "@/utils/models/listPageConfig";
import { useFetcher } from "react-router-dom";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";
import { useSessionStorage } from "@/utils/customHooks/useSessionStorage";

export default function Selector<T extends EntityKey>({
  entity,
  path,
  selectedDisplay,
  selectedObject,
  canAdd = false,
}: {
  entity: T;
  path: string;
  selectedDisplay: (item: rowTypesObject[T]) => string;
  selectedObject: [
    rowTypesObject[T] | undefined,
    Setter<rowTypesObject[T] | undefined>,
  ];
  canAdd?: boolean;
}) {
  const [object, setObject] = selectedObject;

  const [storedObject, setStoredObject] = useSessionStorage<
    rowTypesObject[T] | undefined
  >(`selected${entity}`, undefined);

  if (storedObject) setObject(storedObject);

  const [isOpen, setIsOpen] = useSessionStorage(
    `is${entity}SelectorOpen`,
    false,
  );

  const [urlParamsString, setUrlParamsString] = useSessionStorage(
    `urlParams${entity}`,
    "",
  );

  const UrlState: [URLSearchParams, (params: URLSearchParams) => void] = [
    new URLSearchParams(urlParamsString),
    (params: URLSearchParams) => {
      setUrlParamsString(params.toString());
    },
  ];

  const paramString = UrlState[0].toString();

  const fetcher = useFetcher();

  // Fetch list data
  useEffect(() => {
    fetcher.load(`${path}/list?${paramString}`);
  }, [paramString]);

  // Close dialog when selection is made

  const [rowTemplate, filterFields] = listPageConfig[entity];

  // UI when nothing selected
  let triggerUI: ReactNode = (
    <span>
      <Clickable
        style={{ fontSize: "inherit" }}
        as="button"
        variant="link"
        onClick={() => setIsOpen(true)}
      >
        {`Select ${entity}`}
      </Clickable>
    </span>
  );

  // UI when something selected
  if (object) {
    triggerUI = (
      <span className="flex h-auto space-x-2 align-middle">
        <span>{selectedDisplay(object)}</span>
        <Clickable
          style={{ fontSize: "inherit" }}
          as="button"
          variant="link"
          onClick={() => setIsOpen(true)}
        >
          Modify
        </Clickable>
        <button
          onClick={() => {
            setStoredObject(undefined);
            setObject(undefined);
            // this will also clear sessionStorage
          }}
        >
          <X />
        </button>
      </span>
    );
  }

  if (!fetcher.data) return;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {triggerUI}
        {isOpen && (
          <DialogPortal>
            <DialogContent className="w-500 pt-4 text-left!">
              <DialogHeader>
                <DialogTitle>
                  <H2 className="text-left text-2xl!">{`Select ${entity}`}</H2>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-2! space-x-2!">
                <ListPage<T>
                  title={entity}
                  canAdd={canAdd}
                  rowTemplate={rowTemplate}
                  filterFields={filterFields}
                  UrlState={UrlState}
                  data={fetcher?.data}
                  isSelector={true}
                  detailsLink={path}
                  selectedObject={selectedObject}
                  withBack={false}
                  onSelect={(item) => {
                    setObject(item);
                    setStoredObject(item);
                    setIsOpen(false);
                  }}
                />
              </div>
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>
    </>
  );
}
