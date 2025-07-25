import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey, Setter } from "@/utils/models/types/util";
import type { Primitive } from "zod";
import Clickable from "../customComponents/Clickable";

export default function Data<T extends EntityKey>({
  data,
  fields,
  isModal = false,
  setSubCard,
  isNestedCard = false,
}: {
  data: typesObject[T];
  fields: (
    item: typesObject[T],
  ) => [label: string, value: Primitive, link?: string, entity?: EntityKey][];
  setSubCard?: Setter<[EntityKey, string] | undefined>;
  isModal: boolean;
  isNestedCard: boolean;
}) {
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
