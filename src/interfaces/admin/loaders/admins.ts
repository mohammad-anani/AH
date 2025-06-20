import type { LoaderFunctionArgs } from "react-router-dom";
import { findByID } from "@/api/findByID";
import throwError from "@/utils/throwError";

export async function findAdminLoader({ params }: LoaderFunctionArgs) {
  if (!params["id"] || isNaN(Number(params["id"]))) {
    throwError(400, "Bad request", "Invalid admin ID");
  }

  const admin = await findByID("Admins", Number(params["id"]));
  return admin;
}
