import MakeAppointment from "@/features/testOrder/MakeAppointment";
import { route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/receptionist";
import type { RouteObject } from "react-router-dom";
import reserveAction from "../../../actions/reserveTestAppointnemntAction";

const makeAppointmentRoute: RouteObject[] = [
  { path: "reserve", Component: MakeAppointment, action: reserveAction },
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
