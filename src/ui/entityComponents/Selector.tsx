import { type EntityKey, type Setter } from "@/utils/models/types/util";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
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
import { useSessionStorage } from "@/utils/customHooks/useSessionStorage";
import SelectorTrigger from "./selectorComponents/SelectorTrigger";
import { useSessionSyncedObject } from "./selectorComponents/useSessionSyncedObject";
import { useUrlSearchParamsSession } from "./selectorComponents/useUrlSearchParamsSession";

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

  // Sync selectedObject with sessionStorage
  const [, setStoredObject] = useSessionSyncedObject(
    `selected${entity}`,
    object,
    setObject,
  );

  // Modal open state with sessionStorage
  const [isOpen, setIsOpen] = useSessionStorage(
    `is${entity}SelectorOpen`,
    false,
  );

  // URL search params with sessionStorage
  const UrlState = useUrlSearchParamsSession(`urlParams${entity}`);

  const paramString = UrlState[0].toString();

  const fetcher = useFetcher();
  useEffect(() => {
    fetcher.load(`${path}/list?${paramString}`);
  }, [paramString, path]);

  if (!fetcher.data) return null;

  const [rowTemplate, filterFields] = listPageConfig[entity];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <SelectorTrigger
          object={object}
          setObject={setObject}
          setStoredObject={setStoredObject}
          selectedDisplay={selectedDisplay}
          setIsOpen={setIsOpen}
          entity={entity}
        />
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
                  data={fetcher.data}
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
