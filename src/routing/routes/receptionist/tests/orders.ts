import { route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/receptionist";

export const testOrdersRoutes = route(
  "TestOrder",
  true,
  true,
  false,
  testOrder,
  true,
  undefined,
  undefined,
  true,
  true,
  "tests/",
);
