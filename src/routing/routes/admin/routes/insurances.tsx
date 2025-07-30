import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { listPageConfig } from "@/utils/models/componentsConfig/listPageConfig";
import type { RouteObject } from "react-router-dom";

const insuranceListRoute: RouteObject[] = [
  {
    index: true,
    loader: listLoader("InsuranceRow", undefined, ["PatientID"]),
    element: (
      <ListPage
        entity="Insurance"
        canAdd={true}
        canModifyUrl={false}
        rowTemplate={listPageConfig["Insurance"][0]}
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
  true,
  true,
  undefined,
  [[insuranceListRoute, "index"]],
  false,
  true,
);
