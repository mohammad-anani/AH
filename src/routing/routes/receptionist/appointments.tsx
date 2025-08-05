import { route } from "@/routing/entityRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import ServiceCard from "@/ui/entityComponents/ServicesCard";
import listLoader from "@/utils/loaders/listLoader";
import {
  appointment,
  testOrder,
} from "@/utils/models/componentsConfig/receptionist";
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
        detailsLink={(ID) => `/receptionist/tests/orders/${ID}`}
      />
    ),
  },
];

const appointmentCard: RouteObject[] = [
  {
    index: true,
    element: (
      <ServiceCard
        title="Appointment"
        subLinks={appointment.subLinks}
        dataFields={appointment.dataFields}
      />
    ),
  },
];

export const appointmentsRoutes = route(
  "Appointment",
  true,
  true,
  false,
  appointment,
  false,
  undefined,
  [
    [testOrdersRoute, "id"],
    [appointmentCard, "id"],
  ],
  true,
  true,
  undefined,
  false,
);
