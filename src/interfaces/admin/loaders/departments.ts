import type { LoaderFunctionArgs } from "react-router-dom";
import { findDepartment } from "../../../api/departments";

export async function findDepartmentLoader({ params }: LoaderFunctionArgs) {
  const department = await findDepartment(Number(params["id"]));

  return department;
}
