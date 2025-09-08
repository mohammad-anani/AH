import { TestTypeFormSelectorCallback } from "@/features/testOrder/TestTypeSelectCallback";
import { serviceRoute } from "@/routing/serviceRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import { decodeJwt } from "@/utils/helpers/jwt-decoder";

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

const token = localStorage.getItem("token");
const doctorID = decodeJwt(token ?? "")?.sub;

export const appointmentsRoutes = serviceRoute(
  "Appointment",
  appointment,
  [
    ["Notes", "Notes", "text", "All"],
    ["Result", "Result", "text", "All"],
    [
      "Tests",
      "TestTypeIDs",
      "custom",
      ["Complete"],
      TestTypeFormSelectorCallback,
    ],
  ],
  [[testOrdersRoute, "id"]],
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  () => `doctors/${doctorID}`,
  true,
  true,
  undefined,
  false,
  "Doctor",
  false,
  false,
);
