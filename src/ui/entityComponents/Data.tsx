import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { Setter } from "@/utils/models/types/utils/basics";
import Clickable from "../customComponents/Clickable";

type DataProps<T extends EntityKey> = {
  data: typesObject[T];
  fields: DataFields<T>;
  setSubCard?: Setter<[EntityKey, string] | undefined>;
  isModal?: boolean;
  isNestedCard?: boolean;
};

export default function Data<T extends EntityKey>({
  data,
  fields,
  isModal = false,
  setSubCard,
  isNestedCard = false,
}: DataProps<T>) {
  return (
    <>
      {fields(data).map(([label, value, link, entity]) => (
        <>
          <span>{label}:</span>

          <span>
            {link ? (
              <Clickable
                disabled={isNestedCard}
                title={isNestedCard ? "Can't open more nested cards" : ""}
                as={isModal ? "button" : "Link"}
                {...(isModal
                  ? { onClick: () => setSubCard?.([entity as EntityKey, link]) }
                  : { to: link })}
                variant="link"
              >
                {String(value)}
              </Clickable>
            ) : (
              String(value)
            )}
          </span>
        </>
      ))}
    </>
  );
}
