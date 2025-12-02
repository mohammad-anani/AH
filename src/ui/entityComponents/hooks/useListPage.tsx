import Clickable from "@/ui/customComponents/Clickable";
import { formatTitle } from "@/utils/formatters/formatTitle";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import { Info, Check } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import useFilter from "./useFilter";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import type { SelectedObjectState } from "@/utils/models/types/utils/selectorTypes";

import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";
import { useWindowWidth } from "@/utils/hooks/useWindowWidth";

export default function useListPage<T extends EntityKey>(
  entity: T,
  rowTemplate: RowTemplate<T>,
  searchParamsState?: SearchParamsState,
  data?: [rowTypesObject[T][], number],
  onDetailsClick?: (ID: number) => void,
  selectedObjectState?: SelectedObjectState<T>,
  onSelect?: (object: rowTypesObject[T]) => void,
  detailsLink?: (ID: number) => string,
) {
  const loaderData = useLoaderData();
  const [isFilterOpen, setIsFilterOpen] = useFilter(
    searchParamsState?.[0].toString(),
  );

  // const [items, itemsCount] = searchParamsState && data ? data : loaderData;
  const [items, itemsCount] = data ?? loaderData;

  const [headerFields, dataFields, gridFr] = rowTemplate;

  const additionnalFr = searchParamsState ? [1, 1] : [1]


  const windowWidth = useWindowWidth();


  let sliceEnd = headerFields.length;

  if (!searchParamsState) {

    if (windowWidth < 600)
      sliceEnd = 2;
    else if (windowWidth < 800)
      sliceEnd = 3
    else if (windowWidth < 1000)
      sliceEnd = 4
    else if (windowWidth < 1200)
      sliceEnd = 5

  }
  else {
    sliceEnd = 1;
  }

  if (sliceEnd > headerFields.length)
    sliceEnd = headerFields.length



  const responsiveGridFr = gridFr.slice(0, sliceEnd);

  const totalGridFr = [...responsiveGridFr, ...(additionnalFr)]


  const gridTemplate = totalGridFr
    .map((fr) => `${fr}fr`)
    .join(" ");

  const gridStyle = {
    display: "grid",
    gap: "15px",
    gridTemplateColumns: gridTemplate,
  };

  const Header = (
    <li key="Header" style={gridStyle}>
      {headerFields.slice(0, sliceEnd).map((field) => (
        <span>{field}</span>
      ))}
    </li>
  );

  const render = (item: rowTypesObject[T]) => {
    return (
      <li style={gridStyle} key={item?.["ID"]}>
        {dataFields(item ?? undefined).slice(0, sliceEnd).map((field) => (
          <span>{String(field)}</span>
        ))}
        <Clickable
          className="flex! items-center gap-x-1"
          as={searchParamsState ? "button" : "Link"}
          variant="secondary"
          {...(searchParamsState
            ? {
              onClick: () => {
                onDetailsClick?.(item.ID);
              },
            }
            : {
              to: detailsLink ? detailsLink(item?.["ID"]) : `${item?.["ID"]}`,
            })}
        >
          <Info className="*:text-primary! h-[20px] w-[20px]" />
          Details
        </Clickable>

        {searchParamsState &&
          item?.["ID"] !== selectedObjectState?.[0]?.["ID"] ? (
          <Clickable
            className="flex! items-center gap-x-1"
            as="button"
            variant="secondary"
            onClick={() => {
              onSelect?.(item ?? undefined);
            }}
          >
            <Check className="*:text-primary! h-[20px] w-[20px]" />
            Select
          </Clickable>
        ) : null}
      </li>
    );
  };

  const title = formatTitle(entity) + "s";

  return {
    isFilterOpen,
    setIsFilterOpen,
    items,
    itemsCount,
    Header,
    render,
    title,
  };
}
