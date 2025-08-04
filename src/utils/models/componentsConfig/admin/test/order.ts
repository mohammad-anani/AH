import type { typesObject } from "@/utils/models/types/normal/typesObject";
import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../../utils/RoleUtil";

import type { RouteConfig } from "../../routeConfig";

import { doctor } from "../human-resources";
import { appointment } from "../appointment";

export const testOrder: RouteConfig<"TestOrder"> = {
  dataFields: ({ TestTypeID, AppointmentID }: typesObject["TestOrder"]) => [
    ["Test Type", "View Type", "/admin/tests/types/" + TestTypeID, "TestType"],
    [
      "Appointment",
      "View Appointment",
      "/admin/appointments/" + AppointmentID,
      "TestType",
    ],
  ],
  filterFields: [
    adminFilterSelectorField("AppointmentID", "Appointment", appointment),

    adminFilterSelectorField("DoctorID", "Doctor", doctor),
    ...(admingenerateAuditFields("Doctor") ?? []),
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/tests/orders",
  },
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientName, item.TestName],
    [2, 2],
  ],
  subLinks: ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
  ],
};
