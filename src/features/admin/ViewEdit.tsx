import type { Admin } from "@/utils/models/types";
import { Outlet, useLoaderData } from "react-router-dom";

export default function ViewEdit() {
  const admin = useLoaderData() as Admin;

  return <Outlet context={{ admin }} />;
}
