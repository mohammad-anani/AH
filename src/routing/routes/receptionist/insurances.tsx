import { Route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { insurance } from "@/utils/models/componentsConfig/receptionist";

import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";
import type { RouteObject } from "react-router-dom";


export const insuranceRoute = Route(
  "Insurance",
  false,
  true,
  false,
  insurance,
  false,
  undefined,
  undefined,
  false,
  false,
);
