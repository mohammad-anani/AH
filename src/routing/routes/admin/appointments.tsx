import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { testOrder } from "@/utils/models/componentsConfig/admin/entities";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";
import type { RouteObject } from "react-router-dom";

const testOrdersRoute: RouteObject[] = [
  {
    path: "test-orders",
    loader: listLoader("TestOrderRow", ({ id }) => `/appointments/${id}`),
    element: (
      <ListPage
        entity="TestOrder"
        canAdd={false}
        rowTemplate={testOrder["rowTemplate"]}
        withBack={true}
        canModifyUrl={false}
        detailsLink={(ID) => `/admin/tests/orders/${ID}`}
      />
    ),
  },
];

export const appointmentsRoutes = route(
  "Appointment",
  false,
  false,
  true,
  adminRouteConfigs["Appointment"],
  true,
  undefined,
  [[testOrdersRoute, "id"]],
);
