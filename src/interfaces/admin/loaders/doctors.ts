import type { LoaderFunctionArgs } from "react-router-dom";
import { findDoctor } from "../../../api/doctors";

export async function findDoctorLoader({ params }: LoaderFunctionArgs) {
  const doctor = await findDoctor(Number(params["id"]));
  return doctor;
}
