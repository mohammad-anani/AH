import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey } from "@/utils/models/types/util";
import type { Primitive } from "zod";
import Clickable from "../customComponents/Clickable";

export default function Data<T extends EntityKey>({
  data,
  fields,
}: {
  data: typesObject[T];
  fields: (
    item: typesObject[T],
  ) => [label: string, value: Primitive, link?: string][];
}) {
  return (
    <>
      {fields(data).map(([label, value, link]) => (
        <>
          <span>{label}:</span>

          <span>
            {link ? (
              <Clickable as="Link" to={link} variant="link">
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
