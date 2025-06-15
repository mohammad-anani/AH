import { Outlet, useLoaderData } from "react-router-dom";
import type { Department } from "../../utils/types";

export default function DepartmentViewEdit() {
  const department = useLoaderData() as Department;

  return <Outlet context={{ department }} />;
}
