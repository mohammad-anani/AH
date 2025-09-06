import { Route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { insurance, patient } from "@/utils/models/componentsConfig/admin";
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
        canAdd={false}
        canModifyUrl={false}
        rowTemplate={insurance["rowTemplate"] as RowTemplate<EntityKey>}
        filterFields={undefined}
        withBack={true}
      />
    ),
  },
];

export const patientsRoutes = Route(
  "Patient",
  false,
  false,
  true,
  patient,
  true,
  undefined,
  [[insuranceListRoute, "id"]],
);
