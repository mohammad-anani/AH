import ReserveFollowUpForm from "@/routing/ReserveFollowUpForm";
import { serviceRoute } from "@/routing/serviceRoute";
import ListPage from "@/ui/entityComponents/ListPage";

import reserveAppointmentFollowUpAction from "@/routing/actions/reserveAppointmentFollowUp";
import listLoader from "@/utils/loaders/listLoader";
import {
  appointment,
  prescription,
  testOrder,
} from "@/utils/models/componentsConfig/receptionist";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";
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

const prescriptionsListRoute: RouteObject[] = [
  {
    path: "prescriptions",
    loader: listLoader(
      "Prescription",
      undefined,
      undefined,
      ({ id }) => `appointments/${id}/prescriptions`,
    ),
    element: (
      <ListPage
        entity="Prescription"
        canAdd={false}
        canModifyUrl={false}
        rowTemplate={prescription["rowTemplate"] as RowTemplate<EntityKey>}
        filterFields={undefined}
        withBack={true}
        detailsLink={(id) => `/receptionist/prescriptions/${id}`}
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
    [prescriptionsListRoute, "id"]
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
