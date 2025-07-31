import { formatTitle } from "@/utils/formatters/formatTitle";

import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import type { SelectedObjectState } from "@/utils/models/types/utils/selectorTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function useSelector<T extends EntityKey>(
  entity: T,
  selectedObjectState: SelectedObjectState<T>,
  path: string,
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

  useEffect(() => {
    listFetcher.load(`${path}/list?${paramString}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramString, path]);

  useEffect(() => {
    if (searchParamsState) {
      if (
        listFetcher.data?.[0] &&
        object?.["ID"] &&
        Object.keys(object).length === 1 &&
        Object.keys(object)[0] === "ID"
      ) {
        setObject?.(
          (listFetcher.data?.[0] as rowTypesObject[T][])?.find(
            (item) => item?.["ID"] === object?.["ID"],
          ),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFetcher.data?.[0], CardID]);

  const cardFetcher = useFetcher();

  useEffect(() => {
    if (CardID) cardFetcher.load(`${path}/${CardID}`);

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
    listData: listFetcher.data,
    searchParamsState,

    title,
  };
}
