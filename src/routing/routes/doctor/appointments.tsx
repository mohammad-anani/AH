import { serviceRoute } from "@/routing/serviceRoute";
import ListPage from "@/ui/entityComponents/ListPage";

import listLoader from "@/utils/loaders/listLoader";
import { appointment, testOrder } from "@/utils/models/componentsConfig/doctor";
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
        detailsLink={(ID) => `/receptionist/tests/orders/${ID}`}
      />
    ),
  },
];

export const appointmentsRoutes = serviceRoute(
  "Appointment",
  appointment,
  [["Notes", "Notes", "text", "All"]],
  [[testOrdersRoute, "id"]],
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  undefined,
  true,
  true,
  undefined,
  false,
);
