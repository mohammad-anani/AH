import { type EntityKey } from "@/utils/models/types/util";
import { useEffect, useState, type ReactNode } from "react";
import Clickable from "../customComponents/Clickable";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import H2 from "../customComponents/H2";
import ListPage from "./ListPage";
import { listPageConfig } from "@/utils/models/listPageConfig";
import { useFetcher } from "react-router-dom";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

export default function Selector<T extends EntityKey>({
  entity,
  path,
  selectedDisplay,
  canAdd = false,
}: {
  entity: T;
  path: string;
  selectedDisplay: (item: rowTypesObject[T]) => string;
  canAdd?: boolean;
}) {
  const [object, setObject] = useState<rowTypesObject[T] | undefined>(
    undefined,
  );

  const UrlState = useState<URLSearchParams>(new URLSearchParams());

  const [params] = UrlState;

  const paramString = params.toString() || "";

  let ui: ReactNode;

  const fetcher = useFetcher();

  const itemsCount = fetcher.data?.[1];

  useEffect(() => {
    fetcher.load(`${path}/list?${paramString}`);
  }, [paramString, itemsCount]);

  if (!object)
    ui = (
      <span>
        <DialogTrigger>
          <Clickable as="button" variant="link">
            {`Select ${entity}`}
          </Clickable>
        </DialogTrigger>
      </span>
    );
  else
    ui = (
      <span>
        <span>{selectedDisplay(object)}</span>
        <DialogTrigger>
          <Clickable as="button" variant="link">
            Modify
          </Clickable>
        </DialogTrigger>
        <button
          onClick={() => {
            setObject(undefined);
          }}
        >
          <X />
        </button>
      </span>
    );

  const [rowTemplate, filterFields] = listPageConfig[entity];

  return (
    <Dialog>
      {ui}
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
              selectedObject={[object, setObject]}
            />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
