// Selector.tsx
import {
  type EntityKey,
  type SelectedObjectState,
  type Setter,
} from "@/utils/models/types/util";

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
import useSelector from "./selectorComponents/useSelector";
import CardSection from "./selectorComponents/CardSection";
import ListSection from "./selectorComponents/ListSection";

type SelectorProps<T extends EntityKey> = {
  entity: T;
  path: string;
  selectedDisplay: (item: rowTypesObject[T]) => string;
  selectedObjectState: SelectedObjectState<T>;
  canAdd?: boolean;
};

export default function Selector<T extends EntityKey>({
  entity,
  path,
  selectedDisplay,
  selectedObjectState,
  canAdd = false,
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
    rowTemplate,
    filterFields,
    subLinks,
    dataFields,
  } = useSelector(entity, selectedObjectState, path);

  const title = entity.startsWith("Test")
    ? entity.replace("Test", "Test ")
    : entity;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <SelectorTrigger
        selectedObject={selectedObjectState}
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

          {!CardID || !cardData ? (
            <ListSection
              entity={entity}
              data={listData}
              selectedObjectState={selectedObjectState}
              canAdd={canAdd}
              rowTemplate={rowTemplate}
              filterFields={filterFields}
              searchParamsState={searchParamsState}
              onDetailsClick={setCardID}
              onSelect={(item) => {
                setObject(item);
                setIsOpen(false);
              }}
              path={path}
            />
          ) : (
            <CardSection
              entity={entity}
              cardData={cardData}
              cardID={CardID}
              objectID={object?.["ID"]}
              subLinks={subLinks}
              dataFields={dataFields}
              onBack={() => setCardID(undefined)}
              onSelect={() => {
                (setObject as Setter<rowTypesObject[T] | { ID: number }>)({
                  ID: CardID,
                });
                setCardID(undefined);
              }}
            />
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
