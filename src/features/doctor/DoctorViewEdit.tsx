import { Outlet, useLoaderData } from "react-router-dom";
import type { Doctor } from "../../utils/models/types";

export default function DoctorViewEdit() {
  const doctor = useLoaderData() as Doctor;

  return <Outlet context={{ doctor }} />;
}
