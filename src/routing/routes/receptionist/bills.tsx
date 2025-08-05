import Pay from "@/features/payment/Pay";
import { route } from "@/routing/entityRoute";
import InvalidPath from "@/ui/InvalidPath";
import listLoader from "@/utils/loaders/listLoader";
import { bill } from "@/utils/models/componentsConfig/receptionist";
import type { RouteObject } from "react-router-dom";

const extra: RouteObject[] = [
  { index: true, Component: InvalidPath, loader: listLoader("BillRow") },
];

const payRoute: RouteObject[] = [{ path: "pay", Component: Pay }];

export const billRoute = route(
  "Bill",
  false,
  false,
  true,
  bill,
  false,
  undefined,
  [
    [extra, "index"],
    [payRoute, "id"],
  ],
  false,
  true,
);
