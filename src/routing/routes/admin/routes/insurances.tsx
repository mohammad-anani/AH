import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";
import { rowTemplates } from "@/utils/models/componentsConfig/rowTemplate/rowTemplates";
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
        rowTemplate={rowTemplates["Insurance"]}
        filterFields={undefined}
        withBack={true}
      />
    ),
  },
];

export const insuranceRoute = route(
  "Insurance",
  false,
  false,
  true,
  routeConfigs["Insurance"],
  false,
  undefined,
  [[insuranceListRoute, "index"]],
  false,
  true,
);
