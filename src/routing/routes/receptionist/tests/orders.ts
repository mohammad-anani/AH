import MakeAppointment from "@/features/testOrder/makeAppointment";
import { route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/receptionist";
import type { RouteObject } from "react-router-dom";

const makeAppointmentRoute: RouteObject[] = [
  { path: "reserve", Component: MakeAppointment },
];

export const testOrdersRoutes = route(
  "TestOrder",
  false,
  false,
  false,
  testOrder,
  true,
  undefined,
  [[makeAppointmentRoute, "id"]],
  true,
  true,
);
