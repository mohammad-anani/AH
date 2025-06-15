import type { LoaderFunctionArgs } from "react-router-dom";
import { findReceptionist } from "../../../api/receptionists";

export async function findReceptionistLoader({ params }: LoaderFunctionArgs) {
  const receptionist = await findReceptionist(Number(params["id"]));

  return receptionist;
}
