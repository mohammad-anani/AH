import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { rowTemplates } from "@/utils/models/componentsConfig/receptionist/rowTemplates";
import {
  receptionistRouteConfigs,
  type RowTemplate,
} from "@/utils/models/componentsConfig/routeConfig";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RouteObject } from "react-router-dom";

const insuranceListRoute: RouteObject[] = [
  {
    index: true,
    loader: listLoader("InsuranceRow", undefined, ["PatientID"]),
    element: (
      <ListPage
        entity="Insurance"
        canAdd={false}
        canModifyUrl={false}
        rowTemplate={rowTemplates["Insurance"] as RowTemplate<EntityKey>}
        filterFields={undefined}
        withBack={true}
      />
    ),
  },
];

export const insuranceRoute = route(
  "Insurance",
  true,
  true,
  false,
  receptionistRouteConfigs["Insurance"],
  false,
  undefined,
  [[insuranceListRoute, "index"]],
  false,
  true,
);
