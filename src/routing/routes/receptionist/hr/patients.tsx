
import { patient } from "@/utils/models/componentsConfig/receptionist";


import { Route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { insurance } from "@/utils/models/componentsConfig/receptionist";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";
import type { RouteObject } from "react-router-dom";

const insuranceListRoute: RouteObject[] = [
  {
    path: "insurances",
    loader: listLoader(
      "Insurance",
      undefined,
      undefined,
      ({ id }) => `patients/${id}/insurances`,
    ),
    element: (
      <ListPage
        entity="Insurance"
        canAdd={true}
        canModifyUrl={false}
        rowTemplate={insurance["rowTemplate"] as RowTemplate<EntityKey>}
        filterFields={undefined}
        withBack={true}
        detailsLink={(id) => `/receptionist/insurances/${id}`}
      />
    ),
  },
];


export const patientRoutes = Route(
  "Patient",
  true,
  true,
  false,
  patient,
  false,
  undefined,
  [[insuranceListRoute, "id"]],
  true,
  true,
);
