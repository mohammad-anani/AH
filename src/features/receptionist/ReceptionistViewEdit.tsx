import { Outlet, useLoaderData } from "react-router-dom";
import type { Receptionist } from "../../utils/models/types";

export default function ReceptionistViewEdit() {
  const receptionist = useLoaderData() as Receptionist;

  return <Outlet context={{ receptionist }} />;
}
