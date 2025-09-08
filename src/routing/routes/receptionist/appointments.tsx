import { serviceRoute } from "@/routing/serviceRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import ReserveFollowUpForm from "@/routing/ReserveFollowUpForm";

import listLoader from "@/utils/loaders/listLoader";
import {
  appointment,
  testOrder,
} from "@/utils/models/componentsConfig/receptionist";
import reserveAppointmentFollowUpAction from "@/routing/actions/reserveAppointmentFollowUp";
import type { RouteObject } from "react-router-dom";

const testOrdersRoute: RouteObject[] = [
  {
    path: "test-orders",
    loader: listLoader(
      "TestOrder",
      undefined,
      undefined,
      ({ id }) => `/appointments/${id}/test-orders`,
    ),
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

const reserveFollowUpRoute: RouteObject[] = [
  {
    path: "reserve-follow-up",
    action: reserveAppointmentFollowUpAction,
    element: <ReserveFollowUpForm />,
  },
];

export const appointmentsRoutes = serviceRoute(
  "Appointment",
  appointment,
  [
    ["Notes", "Notes", "text", "All"],
    ["Scheduled Date", "ScheduledDate", "datetime", new Set(["Reschedule"])],
  ],
  [
    [testOrdersRoute, "id"],
    [reserveFollowUpRoute, "id"],
  ],
  true,
  true,
  false,
  true,
  true,
  false,
  false,
  undefined,
  true,
  true,
  undefined,
  true,
);
