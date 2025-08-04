import Tests from "@/interfaces/admin/pages/Tests";
import { testTypesRoutes } from "./tests/types";
import { testOrdersRoutes } from "./tests/orders";
import { testAppointmentsRoutes } from "./tests/appointments";

export const testsRoutes = [
  {
    path: "tests",
    children: [
      { path: "", Component: Tests },
      ...testTypesRoutes,
      ...testOrdersRoutes,
      ...testAppointmentsRoutes,
    ],
  },
];
