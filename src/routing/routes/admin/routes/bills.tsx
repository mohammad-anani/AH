import { route } from "@/routing/entityRoute";
import InvalidPath from "@/ui/InvalidPath";
import listLoader from "@/utils/loaders/listLoader";

import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";
import type { RouteObject } from "react-router-dom";

const extra: RouteObject[] = [
  { index: true, Component: InvalidPath, loader: listLoader("BillRow") },
];

export const billRoute = route(
  "Bill",
  false,
  false,
  true,
  routeConfigs["Bill"],
  false,
  undefined,
  [[extra, "index"]],
  false,
  true,
);
