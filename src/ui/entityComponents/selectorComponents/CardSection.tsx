import Clickable from "@/ui/customComponents/Clickable";

import type {
  dataFields,
  EntityKey,
  SubLinks,
} from "@/utils/models/types/util";
import Card from "../Card";
import type { typesObject } from "@/utils/models/types/typesObject";
import { dataFields as dataFieldsConfig } from "@/utils/models/componentsConfig/dataFields";

type CardProps<T extends EntityKey> = {
  entity: T;
  cardData: typesObject[T];
  cardID: number;
  objectID?: number;
  subLinks?: SubLinks<T>;
  dataFields: dataFields<T>;
  onBack: () => void;
  onSelect: () => void;
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
}: CardProps<T>) {
  const scrollClass =
    dataFieldsConfig[entity](cardData).length > 8 ? "overflow-y-scroll" : "";

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
        />
      </div>
    </div>
  );
}
