// Selector.tsx

import { type SelectedObjectState } from "@/utils/models/types/utils/selectorTypes";

import { type DataFields } from "@/utils/models/types/utils/routeTypes";
import { type EntityKey } from "@/utils/models/types/utils/entityKeys";
import { type Setter } from "@/utils/models/types/utils/basics";

import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

import H2 from "../customComponents/H2";
import SelectorTrigger from "./selectorComponents/SelectorTrigger";
import useSelector from "./hooks/useSelector";
import CardSection from "./selectorComponents/CardSection";
import ListSection from "./selectorComponents/ListSection";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

type SelectorProps<T extends EntityKey> = {
  entity: T;
  path?: string;
  entityObject: RouteConfig<T>;
  selectedObjectState: SelectedObjectState<T>;

  canAdd?: boolean;

  dataFieldsObject?: {
    [K in EntityKey]: DataFields<K>;
  };
  disabled?: boolean;
  data?: [rowTypesObject[T][], number];
  onEdit?: (object: rowTypesObject[T]) => void;
  onDelete?: (object: rowTypesObject[T]) => void;
};

export default function Selector<T extends EntityKey>({
  entity,
  path,
  disabled = false,
  entityObject,
  selectedObjectState,
  canAdd = false,
  data,
  dataFieldsObject,
  onEdit,
  onDelete,
}: SelectorProps<T>) {
  const {
    isOpen,
    setIsOpen,
    object,
    setObject,
    CardID,
    setCardID,
    cardData,
    listData,
    searchParamsState,
    title,
    isLoading,
  } = useSelector(
    entity,
    selectedObjectState,

    data,
  );

  //added testapp,check /id

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <SelectorTrigger
        disabled={disabled || isLoading}
        selectedObject={selectedObjectState}
        selectedDisplay={entityObject.selectorDisplay}
        entity={entity}
        onDelete={onDelete}
      />
      <DialogPortal>
        <DialogContent className="w-500 pt-4 text-left!">
          <DialogHeader>
            <DialogTitle>
              <H2 className="text-left text-2xl!">{`Select ${title}`}</H2>
            </DialogTitle>
          </DialogHeader>

          {!CardID || !cardData ? (
            <ListSection
              entity={entity}
              data={listData}
              selectedObjectState={selectedObjectState}
              canAdd={canAdd}
              rowTemplate={entityObject["rowTemplate"]}
              filterFields={entityObject["filterFields"]}
              searchParamsState={searchParamsState}
              onDetailsClick={setCardID}
              onSelect={(item) => {
                onEdit?.(item);
                setObject(item);
                setIsOpen(false);
              }}
              path={path ?? ""}
            />
          ) : (
            <CardSection
              entity={entity}
              cardData={cardData}
              cardID={CardID}
              dataFieldsObject={dataFieldsObject}
              objectID={object?.["ID"]}
              dataFields={entityObject["dataFields"]}
              onBack={() => setCardID(undefined)}
              onSelect={() => {
                (setObject as Setter<rowTypesObject[T] | { ID: number }>)({
                  ID: CardID,
                });
                setCardID(undefined);
                setIsOpen(false);
              }}
            />
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
