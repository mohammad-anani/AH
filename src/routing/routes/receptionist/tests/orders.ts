import MakeAppointment from "@/features/testOrder/MakeAppointment";
import { Route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/receptionist";
import type { RouteObject } from "react-router-dom";
import reserveAction from "../../../actions/reserveTestAppointnemntAction";

const makeAppointmentRoute: RouteObject[] = [
  { path: "reserve", Component: MakeAppointment, action: reserveAction },
];

export const testOrdersRoutes = Route(
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
