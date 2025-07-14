import Tests from "@/interfaces/admin/pages/Tests";
import { testTypesRoutes } from "./tests/routes/types";
import { testOrdersRoutes } from "./tests/routes/orders";
import { testAppointmentsRoutes } from "./tests/routes/appointments";

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
