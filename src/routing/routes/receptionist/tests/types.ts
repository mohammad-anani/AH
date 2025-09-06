import { Route } from "@/routing/entityRoute";
import { testType } from "@/utils/models/componentsConfig/receptionist";

export const testTypesRoutes = Route(
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
);
