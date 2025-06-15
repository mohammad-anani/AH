import type { LoaderFunctionArgs } from "react-router-dom";
import { findPatient } from "../../../api/patients";

export async function findPatientLoader({ params }: LoaderFunctionArgs) {
  const patient = await findPatient(Number(params["id"]));

  return patient;
}
