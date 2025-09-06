import { Route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { doctor, operation } from "@/utils/models/componentsConfig/doctor";

import type { RouteObject } from "react-router-dom";

const doctorsRoute: RouteObject[] = [
  {
    path: "doctors",
    loader: listLoader("Doctor", ({ id }) => `/operations/${id}`),
    element: (
      <ListPage
        entity="Doctor"
        canAdd={false}
        rowTemplate={doctor["rowTemplate"]}
        withBack={true}
        canModifyUrl={false}
        detailsLink={(ID) => `/doctor/human-resources/doctors/${ID}`}
      />
    ),
  },
];

export const operationsRoutes = Route(
  "Operation",
  false,
  false,
  false,
  operation,
  false,
  undefined,
  [[doctorsRoute, "id"]],
);
