import { route } from "@/routing/entityRoute";
import { patient } from "@/utils/models/componentsConfig/doctor";

export const patientRoutes = route(
  "Patient",
  false,
  false,
  false,
  patient,
  false,
  undefined,
  undefined,
  false,
  true,
);
