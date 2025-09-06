import { Route } from "@/routing/entityRoute";
import { patient } from "@/utils/models/componentsConfig/receptionist";

export const patientRoutes = Route(
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
