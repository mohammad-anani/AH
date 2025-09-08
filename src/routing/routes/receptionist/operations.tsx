import OperationDoctorListPage from "@/features/doctor/OperationDoctorListPage";
import { Route } from "@/routing/entityRoute";
import operationUpdateLoader from "@/routing/loaders/operationUpdateLoader";
import { serviceRoute } from "@/routing/serviceRoute";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ListPage from "@/ui/entityComponents/ListPage";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import listLoader from "@/utils/loaders/listLoader";
import {
  doctor,
  operation,
} from "@/utils/models/componentsConfig/receptionist";

import type { RouteObject } from "react-router-dom";

const doctorsRoute: RouteObject[] = [
  {
    path: "doctors",
    loader: listLoader(
      "OperationDoctor",
      undefined,
      undefined,
      ({ id }) => `/operations/${id}/doctors`,
    ),
    element: (
      <OperationDoctorListPage
        detailsLink={(ID) => `/receptionist/human-resources/doctors/${ID}`}
      />
    ),
  },
];

const updateRoute: RouteObject[] = [
  {
    path: "update",
    loader: operationUpdateLoader,
    element: (
      <AddUpdateForm
        formConfig={operation["formConfig"]}
        entity={"Operation"}
      />
    ),
    action: addUpdateAction(
      "Operation",
      (request) => `${request.url.replace("/update", "")}`,
    ),
  },
];

export const operationsRoutes = serviceRoute(
  "Operation",
  operation,
  [
    ["Notes", "Notes", "text", "All"],
    ["Scheduled Date", "ScheduledDate", "datetime", new Set(["Reschedule"])],
  ],
  [
    [doctorsRoute, "id"],
    [updateRoute, "id"],
  ],
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  undefined,
  true,
  true,
  undefined,
  true,
  "Receptionist",
);
