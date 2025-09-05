import { formatTitle } from "@/utils/formatters/formatTitle";

import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import type { SelectedObjectState } from "@/utils/models/types/utils/selectorTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { fetchingPaths } from "@/utils/models/componentsConfig/fetchingPaths";

export default function useSelector<T extends EntityKey>(
  entity: T,
  selectedObjectState: SelectedObjectState<T>,

  data?: [rowTypesObject[T][], number],
) {
  const [object, setObject] = selectedObjectState;

  const searchParamsState: SearchParamsState = useState<URLSearchParams>(
    new URLSearchParams(),
  );

  const [isOpen, setIsOpen] = useState(false);

  const [CardID, setCardID] = useState<number | undefined>(undefined);

  const [searchParams] = searchParamsState ?? [];

  const paramString = searchParams?.toString() ?? "";

  const listFetcher = useFetcher();
  const findFetcher = useFetcher();

  useEffect(() => {
    if (!data) listFetcher.load(`${fetchingPaths[entity]}?${paramString}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramString]);

  useEffect(() => {
    if (searchParamsState) {
      if (
        object?.["ID"] &&
        Object.keys(object).length === 1 &&
        Object.keys(object)[0] === "ID"
      ) {
        findFetcher.load(`${fetchingPaths[entity].replace}/${object["ID"]}`);
        if (findFetcher.data)
          setObject?.(findFetcher.data[0][0] as rowTypesObject[T]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFetcher.data?.[0], CardID, findFetcher.data?.[0]]);

  const cardFetcher = useFetcher();

  useEffect(() => {
    if (CardID)
      cardFetcher.load(`${fetchingPaths[entity].replace("list", "" + CardID)}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CardID]);

  const title = formatTitle(entity);

  return {
    isOpen,
    setIsOpen,
    object,
    setObject,
    CardID,
    setCardID,
    cardData: cardFetcher.data,
    listData: data || listFetcher.data,
    searchParamsState,

    title,
  };
}

//fix getting ready ID
