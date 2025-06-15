import type { LoaderFunctionArgs } from "react-router-dom";
import { findAdmins } from "../../../api/admins";

export async function findAdminLoader({ params }: LoaderFunctionArgs) {
  const admin = await findAdmins(Number(params["id"]));
  return admin;
}
