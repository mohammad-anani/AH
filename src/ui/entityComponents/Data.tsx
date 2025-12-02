import { memo, useMemo } from "react";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { Setter } from "@/utils/models/types/utils/basics";
import Clickable from "../customComponents/Clickable";
import { formatTitle } from "@/utils/formatters/formatTitle";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

type DataProps<T extends EntityKey> = {
  data: typesObject[T];
  fields: DataFields<T>;

  setSubCard?: Setter<[EntityKey, string] | undefined>;
  isModal?: boolean;
  isNestedCard?: boolean;
};

const Data = memo(function Data<T extends EntityKey>({
  data,
  fields,
  isModal = false,
  setSubCard,
  isNestedCard = false,
}: DataProps<T>) {
  // Memoize the fields computation to avoid recalculation on every render
  const fieldData = useMemo(() => fields(data), [fields, data]);

  console.log(fieldData);
  if (!fieldData) return;



  return (
    <>
      {fieldData.map(([label, value, link, entity, display]) => {
        return (
          <>
            <span>{label}:</span>

            <span className="flex space-x-2 whitespace-pre-line">
              {link ? (
                <>
                  <span>{display}</span>
                  <Clickable
                    disabled={isNestedCard}
                    title={isNestedCard ? "Can't open more nested cards" : ""}
                    as={isModal ? "button" : "Link"}
                    {...(isModal
                      ? {
                        onClick: () =>
                          setSubCard?.([entity as EntityKey, link]),
                      }
                      : { to: link })}
                    variant="link"
                  >
                    View {formatTitle(entity ?? "")}
                  </Clickable>
                </>
              ) : (
                String(value)
              )}
            </span>
            <span></span>
            <span></span>

          </>
        );
      })}
    </>
  );
});

export default Data;
