import { Route } from "@/routing/entityRoute";
import { doctor } from "@/utils/models/componentsConfig/doctor";

export const doctorsRoutes = Route(
  "Doctor",
  false,
  false,
  false,
  doctor,
  true,
  undefined,
  undefined,
  true,
  true,
);
