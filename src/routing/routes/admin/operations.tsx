import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { doctor } from "@/utils/models/componentsConfig/admin";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";
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
  adminRouteConfigs["Operation"],
  false,
  undefined,
  [[doctorsRoute, "id"]],
);
