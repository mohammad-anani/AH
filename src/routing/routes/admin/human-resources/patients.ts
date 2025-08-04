import { route } from "@/routing/entityRoute";
import { patient } from "@/utils/models/componentsConfig/admin";

export const patientsRoutes = route(
  "Patient",
  false,
  false,
  true,
  patient,
  true,
);
