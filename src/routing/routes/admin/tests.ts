import { testTypesRoutes } from "./tests/types";
import { testOrdersRoutes } from "./tests/orders";
import { testAppointmentsRoutes } from "./tests/appointments";
import InvalidPath from "@/ui/InvalidPath";

export const testsRoutes = [
  {
    path: "tests",
    children: [
      { path: "", Component: InvalidPath },
      ...testTypesRoutes,
      ...testOrdersRoutes,
      ...testAppointmentsRoutes,
    ],
  },
];
