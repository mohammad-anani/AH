import { route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/admin";

export const testOrdersRoutes = route(
  "TestOrder",
  false,
  false,
  true,
  testOrder,
  true,
  undefined,
  undefined,
  false,
  true,
);
