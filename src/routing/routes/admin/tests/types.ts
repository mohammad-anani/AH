import { route } from "@/routing/entityRoute";
import { testType } from "@/utils/models/componentsConfig/admin";
export const testTypesRoutes = route(
  "TestType",
  true,
  true,
  true,
  testType,
  true,
);
