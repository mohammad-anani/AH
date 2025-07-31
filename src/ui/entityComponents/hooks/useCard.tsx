import { dataFields } from "@/utils/models/componentsConfig/dataFields";
import { subLinks } from "@/utils/models/componentsConfig/subLinks";
import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey } from "@/utils/models/types/util";
import { useState, useEffect } from "react";
import { useOutletContext, useFetcher } from "react-router-dom";

export default function useCard<T extends EntityKey>(data?: typesObject[T]) {
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

  return {
    subEntity,
    setSubCard,
    subSubLinks: subLinks[subEntity] || undefined,
    subDataFields: dataFields[subEntity] || undefined,
    object,
    subObject,
    fetcher,
  };
}
