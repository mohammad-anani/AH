import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { datetimeField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil";
import { appointment } from "../appointment";
import { doctor } from "../human-resources";

export const testOrder: RouteConfig<"TestOrder"> = {
  dataFields: ({ TestTypeID, AppointmentID }: typesObject["TestOrder"]) => [
    [
      "Test Type",
      "View Type",
      "/receptionist/tests/types/" + TestTypeID,
      "TestType",
    ],
    [
      "Appointment",
      "View Appointment",
      "/receptionist/appointments/" + AppointmentID,
      "TestType",
    ],
  ],
  filterFields: [
    receptionistFilterSelectorField("Appointment", "Appointment", appointment),

    receptionistFilterSelectorField("DoctorID", "Doctor", doctor),
    datetimeField("OrderAt"),
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/receptionist/tests/orders",
  },
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientName, item.TestName],
    [2, 2],
  ],
  subLinks: ({ ID }) => [
    [
      "Show Test Appointments",
      `/receptionist/tests/appointments?TestOrderID=${ID}`,
    ],
    ["Reserve", "reserve"],
  ],
};
