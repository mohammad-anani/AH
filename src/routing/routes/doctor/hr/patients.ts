import { Route } from "@/routing/entityRoute";
import { patient } from "@/utils/models/componentsConfig/doctor";

export const patientRoutes = Route(
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
