import OperationDoctorListPage from "@/features/doctor/OperationDoctorListPage";
import { Route } from "@/routing/entityRoute";
import listLoader from "@/utils/loaders/listLoader";
import { operation } from "@/utils/models/componentsConfig/admin";
import type { RouteObject } from "react-router-dom";

//to change
const doctorsRoute: RouteObject[] = [
  {
    path: "doctors",
    loader: listLoader(
      "OperationDoctor",
      undefined,
      undefined,
      ({ id }) => "appointments/" + id + "/doctors",
    ),
    element: (
      <OperationDoctorListPage
        detailsLink={(ID) => "/doctor/human-resources/doctors/" + ID}
      />
    ),
  },
];

export const operationsRoutes = Route(
  "Operation",
  false,
  false,
  true,
  operation,
  false,
  undefined,
  [[doctorsRoute, "id"]],
);
