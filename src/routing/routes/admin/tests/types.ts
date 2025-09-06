import { Route } from "@/routing/entityRoute";
import { testType } from "@/utils/models/componentsConfig/admin";
export const testTypesRoutes = Route(
  "TestType",
  true,
  true,
  true,
  testType,
  true,
);
