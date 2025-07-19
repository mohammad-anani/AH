import { Outlet, useLoaderData } from "react-router-dom";
import type { Department } from "../../utils/models/types";

export default function ViewEdit() {
  const department = useLoaderData() as Department;

  return <Outlet context={department} />;
}
