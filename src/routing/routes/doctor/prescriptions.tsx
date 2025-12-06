import { Route } from "@/routing/entityRoute";
import { prescription } from "@/utils/models/componentsConfig/doctor";

export const prescriptionRoute = Route(
  "Prescription",
  false,
  false,
  true,
  prescription,
  true,
  undefined,
  undefined,
  false,
  true, undefined, true
);
