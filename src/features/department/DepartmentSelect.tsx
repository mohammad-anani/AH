import type { typesObject } from "@/utils/models/types/typesObject";
import type { Setter } from "@/utils/models/types/util";
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
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load("/admin/departments/list");
  }, []);

  const departments: typesObject["Department"][] = fetcher.data?.[0] ?? [];

  return (
    <select
      disabled={isDisabled}
      value={departmentID || ""}
      onChange={(e) => {
        setDepartmentID(+e.target.value);
      }}
    >
      <option value={undefined}>Select Department</option>
      {departments?.map((department) => (
        <option key={department.ID} value={department.ID}>
          {department.Name}
        </option>
      ))}
    </select>
  );
}
