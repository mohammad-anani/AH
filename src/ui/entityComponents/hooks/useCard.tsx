import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type {
  DataFields,
  SubLinks,
} from "@/utils/models/types/utils/routeTypes";
import { useState, useEffect } from "react";
import { useOutletContext, useFetcher } from "react-router-dom";

export default function useCard<T extends EntityKey>(
  subLinksObject?: {
    [K in EntityKey]: SubLinks<K>;
  },
  dataFieldsObject?: {
    [K in EntityKey]: DataFields<K>;
  },
  data?: typesObject[T],
) {
  const loaderData = useOutletContext<typesObject[T]>();

  const object = data ?? loaderData;

  const [SubCard, setSubCard] = useState<[EntityKey, string] | undefined>(
    undefined,
  );

  const fetcher = useFetcher();

  const [subEntity, subLink] = (SubCard as [EntityKey, string]) ?? [
    undefined,
    undefined,
  ];

  useEffect(() => {
    if (subLink) fetcher.load(subLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subLink]);

  const subObject = fetcher.data;

  console.log(subLinksObject, dataFieldsObject);
  return {
    subEntity,
    setSubCard,
    subSubLinks: subLinksObject?.[subEntity] || undefined,
    subDataFields: dataFieldsObject?.[subEntity] || undefined,
    object,
    subObject,
    fetcher,
  };
}
