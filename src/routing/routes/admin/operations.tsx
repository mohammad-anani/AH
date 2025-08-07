import OperationDoctorListPage from "@/features/doctor/OperationDoctorListPage";
import { route } from "@/routing/entityRoute";
import listLoader from "@/utils/loaders/listLoader";
import { operation } from "@/utils/models/componentsConfig/admin";
import type { RouteObject } from "react-router-dom";

const doctorsRoute: RouteObject[] = [
  {
    path: "doctors",
    loader: listLoader("OperationDoctorRow"),
    element: (
      <OperationDoctorListPage
        detailsLink={(ID) => "/doctor/human-resources/doctors/" + ID}
      />
    ),
  },
];

export const operationsRoutes = route(
  "Operation",
  false,
  false,
  true,
  operation,
  false,
  undefined,
  [[doctorsRoute, "id"]],
);
