import { route } from "@/routing/entityRoute";
import { testType } from "@/utils/models/componentsConfig/receptionist";

export const testTypesRoutes = route(
  "TestType",
  false,
  false,
  false,
  testType,
  true,
  undefined,
  undefined,
  true,
  true,
  "tests/",
);
