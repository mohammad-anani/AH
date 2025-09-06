import { Route } from "@/routing/entityRoute";
import { testOrder } from "@/utils/models/componentsConfig/admin";

export const testOrdersRoutes = Route(
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
