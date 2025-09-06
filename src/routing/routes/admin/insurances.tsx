import { Route } from "@/routing/entityRoute";

import { insurance } from "@/utils/models/componentsConfig/admin";

//to change

export const insuranceRoute = Route(
  "Insurance",
  false,
  false,
  true,
  insurance,
  false,
  undefined,
  undefined,
  false,
  true,
);
