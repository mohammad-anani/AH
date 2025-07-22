import { route } from "@/routing/entityRoute";

export const testOrdersRoutes = route(
  "TestOrder",
  false,
  true,
  true,

  ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
  ],
  ({ ID }) => [["ID", ID]],
);
