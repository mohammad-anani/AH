import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { rowTemplates } from "@/utils/models/componentsConfig/admin/rowTemplates";
import {
  adminRouteConfigs,
  type RowTemplate,
} from "@/utils/models/componentsConfig/routeConfig";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RouteObject } from "react-router-dom";

const paymentListRoute: RouteObject[] = [
  {
    index: true,
    loader: listLoader("PaymentRow", undefined, ["BillID"]),
    element: (
      <ListPage
        entity="Payment"
        canAdd={false}
        canModifyUrl={false}
        rowTemplate={rowTemplates["Payment"] as RowTemplate<EntityKey>}
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
  adminRouteConfigs["Payment"],
  false,
  undefined,
  [[paymentListRoute, "index"]],
  false,
  true,
);
