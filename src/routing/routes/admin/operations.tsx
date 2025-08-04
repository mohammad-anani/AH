import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { doctor, operation } from "@/utils/models/componentsConfig/admin";
import type { RouteObject } from "react-router-dom";

const doctorsRoute: RouteObject[] = [
  {
    path: "doctors",
    loader: listLoader("DoctorRow", ({ id }) => `/operations/${id}`),
    element: (
      <ListPage
        entity="Doctor"
        canAdd={false}
        rowTemplate={doctor["rowTemplate"]}
        withBack={true}
        canModifyUrl={false}
        detailsLink={(ID) => `/admin/human-resources/doctors/${ID}`}
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
