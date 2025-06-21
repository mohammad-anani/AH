import { Outlet, useLoaderData } from "react-router-dom";
import type { Patient } from "../../utils/models/types";

export default function PatientViewEdit() {
  const patient = useLoaderData() as Patient;

  return <Outlet context={{ patient }} />;
}
