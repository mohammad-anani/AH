import { route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/doctor";

export const testOrdersRoutes = route(
  "TestOrder",
  true,
  false,
  false,
  testOrder,
  true,
  undefined,
  undefined,
  true,
  true,
);
