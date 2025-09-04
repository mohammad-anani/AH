import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import listLoader from "@/utils/loaders/listLoader";
import { appointment, testOrder } from "@/utils/models/componentsConfig/admin";
import type { RouteObject } from "react-router-dom";

const testOrdersRoute: RouteObject[] = [
  {
    path: "test-orders",
    loader: listLoader("TestOrder", ({ id }) => `/appointments/${id}`),
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
  appointment,
  true,
  undefined,
  [[testOrdersRoute, "id"]],
);
