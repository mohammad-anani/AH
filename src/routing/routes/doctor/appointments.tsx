import { PrescriptionMutliFormCallback } from "@/features/prescription/PrescriptionMultiFormCallBack";
import { TestTypeFormSelectorCallback } from "@/features/testOrder/TestTypeSelectCallback";
import { serviceRoute } from "@/routing/serviceRoute";
import ListPage from "@/ui/entityComponents/ListPage";
import { decodeJwt } from "@/utils/helpers/jwt-decoder";

import listLoader from "@/utils/loaders/listLoader";
import { appointment, prescription, testOrder } from "@/utils/models/componentsConfig/doctor";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";
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
        detailsLink={(id) => `/doctor/prescriptions/${id}`}
      />
    ),
  },
];

export const appointmentsRoutes = serviceRoute(
  "Appointment",
  appointment,
  [
    ["Notes", "Notes", "text", "All"],
    ["Result", "Result", "text", "All"],
    [
      "Tests",
      "TestTypesID",
      "custom",
      ["Complete"],
      TestTypeFormSelectorCallback,
    ],
    [
      "Prescriptions",
      "Prescriptions",
      "custom",
      ["Complete"],
      PrescriptionMutliFormCallback,
    ]
  ],
  [[testOrdersRoute, "id"],
  [prescriptionsListRoute, "id"]],
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  () => {

    const token = localStorage.getItem("token");
    const doctorID = decodeJwt(token ?? "")?.sub;

    console.log(doctorID);

    return `doctors/${doctorID}`
  },
  true,
  true,
  undefined,
  false,
  "Doctor",
  false,
  false,
);
