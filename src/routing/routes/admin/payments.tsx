import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { payment } from "@/utils/models/componentsConfig/admin";

import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";
import type { RouteObject } from "react-router-dom";

//to be a follow up of its service
const paymentListRoute: RouteObject[] = [
  {
    index: true,
    loader: listLoader("Payment", undefined, ["BillID"]),
    element: (
      <ListPage
        entity="Payment"
        canAdd={false}
        canModifyUrl={false}
        rowTemplate={payment["rowTemplate"] as RowTemplate<EntityKey>}
        filterFields={undefined}
        withBack={true}
      />
    ),
  },
];

export const paymentRoute = route(
  "Payment",
  true,
  false,
  true,
  payment,
  false,
  undefined,
  [[paymentListRoute, "index"]],
  false,
  true,
);
