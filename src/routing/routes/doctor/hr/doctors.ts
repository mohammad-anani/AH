import { route } from "@/routing/entityRoute";
import { doctor } from "@/utils/models/componentsConfig/doctor";

export const doctorsRoutes = route(
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
