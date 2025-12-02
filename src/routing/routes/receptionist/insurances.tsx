import { Route } from "@/routing/entityRoute";
import { insurance } from "@/utils/models/componentsConfig/receptionist";



export const insuranceRoute = Route(
  "Insurance",
  true,
  true,
  false,
  insurance,
  false,
  undefined,
  undefined,
  false,
  false,
);
