import { route } from "@/routing/entityRoute";
import { patient } from "@/utils/models/componentsConfig/receptionist";

export const patientRoutes = route(
  "Patient",
  true,
  true,
  false,
  patient,
  true,
  undefined,
  undefined,
  true,
  true,
  "human-resources/",
);
