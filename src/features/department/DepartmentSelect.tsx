import { fetchingPaths } from "@/utils/models/componentsConfig/fetchingPaths";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { Setter } from "@/utils/models/types/utils/basics";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function DepartmentSelect({
  departmentID,
  setDepartmentID,
  isDisabled = false,
}: {
  departmentID: number;
  setDepartmentID: Setter<number>;
  isDisabled?: boolean;
}) {
  const { departments, isLoading } = useDepartments();

  return (
    <select
      disabled={isDisabled || isLoading}
      value={departmentID || ""}
      onChange={(e) => {
        setDepartmentID(+e.target.value);
      }}
      aria-label="Select Department"
    >
      <option value="">
        {isLoading ? "Loading departments..." : "Select Department"}
      </option>
      {departments?.map((department) => (
        <option key={department.ID} value={department.ID}>
          {department.Name}
        </option>
      ))}
    </select>
  );
}

function useDepartments() {
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load(fetchingPaths["Department"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const departments: typesObject["Department"][] = fetcher.data?.[0] ?? [];
  const isLoading = fetcher.state === "loading";

  return { departments, isLoading };
}
