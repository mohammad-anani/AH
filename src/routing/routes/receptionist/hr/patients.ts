import { route } from "@/routing/entityRoute";
import { patient } from "@/utils/models/componentsConfig/receptionist";

export const patientRoutes = route(
  "Patient",
  true,
  true,
  false,
  patient,
  false,
  undefined,
  undefined,
  true,
  true,
);
