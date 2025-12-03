import Selector from "@/ui/entityComponents/Selector";
import { testType } from "@/utils/models/componentsConfig/doctor/general/test-type";
import { fetchingPaths } from "@/utils/models/componentsConfig/fetchingPaths";

import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

import type { TestTypeRow } from "@/utils/models/types/row/rowTypes";
import type { Setter } from "@/utils/models/types/utils/basics";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";

import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

export type TestTypeSelectState = number[];

export default function TestTypeSelect({
  disabled = false,
  testTypes,
  setTestTypes,
}: {
  disabled?: boolean;
  testTypes: TestTypeSelectState;
  setTestTypes: Setter<TestTypeSelectState>;
  entityObject?: RouteConfig<"TestType">;
}) {

  const searchParamsState: SearchParamsState = useState<URLSearchParams>(
    new URLSearchParams(),
  );




  const { items, availableItems, count, isLoading, onSelect, onDelete } =
    useTestTypes(testTypes, setTestTypes, searchParamsState);

  if (isLoading) return null;

  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 10 })?.map((_, index) => {
        if (index > 0 && !testTypes[index - 1]) return null;

        const selectedTestTypeId = testTypes[index];
        const selectedTestType = selectedTestTypeId
          ? items.find((item) => item.ID === selectedTestTypeId)
          : undefined;

        return (
          <div key={index}>
            {index === 0 && <hr />}
            <span className="grid grid-cols-[auto_1fr] space-y-0.5 space-x-2">
              <label>Test Type:</label>
              <Selector
                disabled={disabled}
                selectedObjectState={[
                  selectedTestType,
                  (testType) => onSelect(testType as TestTypeRow, index),
                ]}
                entity="TestType"
                entityObject={testType}
                onDelete={onDelete}
                data={[availableItems, count]}
                onEdit={(testType) => onSelect(testType, index)}
                outerSearchParamsState={searchParamsState}
              />
            </span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

function useTestTypes(
  testTypes: TestTypeSelectState,
  setTestTypes: Setter<TestTypeSelectState>,
  searchParamsState: SearchParamsState

) {
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load(fetchingPaths["TestType"] + "?" + searchParamsState[0].toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParamsState[0]]);

  const isValidData =
    fetcher.data && Array.isArray(fetcher.data) && fetcher.data.length === 2;

  const items: TestTypeRow[] = isValidData ? fetcher.data[0] : [];
  const count: number = isValidData ? fetcher.data[1] : 0;

  const availableTestTypes = items.filter(
    (testType) => !testTypes?.includes(testType.ID),
  );

  function onSelect(testType: TestTypeRow, index: number) {
    if (!testType || typeof testType.ID === "undefined") return;

    setTestTypes((prev) => {
      const updated = [...prev];

      const isAlreadySelected = updated.includes(testType.ID);
      if (isAlreadySelected) return prev;

      while (updated.length <= index) {
        updated.push(0);
      }

      updated[index] = testType.ID;

      return updated.filter((id, i) => id > 0 || i < index + 1);
    });
  }

  function onDelete(testType: TestTypeRow) {
    if (!testType || typeof testType.ID === "undefined") return;

    setTestTypes((prev) => prev.filter((id) => id !== testType.ID));
  }

  return {
    items: items,
    availableItems: availableTestTypes,
    count,
    isLoading: !isValidData,
    onSelect,
    onDelete,
  };
}
