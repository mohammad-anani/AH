import { Outlet, useLoaderData } from "react-router-dom";
import type { TestAppointment } from "@/utils/models/types";

export default function ViewEdit() {
  const appointment = useLoaderData() as TestAppointment;
  return <Outlet context={{ appointment }} />;
}
