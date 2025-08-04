import Clickable from "@/ui/customComponents/Clickable";

import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SubLinks } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import Card from "../Card";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

type CardProps<T extends EntityKey> = {
  entity: T;
  cardData: typesObject[T];
  cardID: number;
  objectID?: number;
  subLinks?: SubLinks<T>;
  dataFields: DataFields<T>;
  onBack: () => void;
  subSubLinks?: SubLinks<EntityKey>;
  subDataFields?: DataFields<EntityKey>;
  onSelect: () => void;
  dataFieldsObject?: {
    [K in EntityKey]: DataFields<K>;
  };
};

export default function CardSection<T extends EntityKey>({
  entity,
  cardData,
  cardID,
  objectID,
  subLinks,
  dataFields,
  onBack,
  onSelect,

  dataFieldsObject,
}: CardProps<T>) {
  const scrollClass =
    dataFields(cardData).length > 8 ? "overflow-y-scroll" : "";

  return (
    <div className="space-y-2! space-x-2!">
      <Clickable as="button" variant="secondary" onClick={onBack}>
        Back
      </Clickable>
      {objectID !== cardID ? (
        <Clickable as="button" variant="primary" onClick={onSelect}>
          Select
        </Clickable>
      ) : null}
      <div className={`max-h-[300px] ${scrollClass}`}>
        <Card
          canEdit={false}
          canDelete={false}
          title={entity}
          data={cardData}
          subLinks={subLinks}
          dataFields={dataFields}
          isModal={true}
          dataFieldsObject={dataFieldsObject}
        />
      </div>
    </div>
  );
}
