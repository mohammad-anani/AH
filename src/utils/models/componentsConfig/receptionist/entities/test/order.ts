import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { datetimeField } from "../../../utils/reusableFields";
import type { Config } from "../../../routeConfig";
import { receptionistFilterSelectorField } from "../../../utils/RoleUtil";
import { appointment } from "../appointment";
import { doctor } from "../human-resources";

export const testOrder: Config<"TestOrder"> = {
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
    receptionistFilterSelectorField(
      "Appointment",
      "Appointment",
      appointment["filterFields"],
      appointment["selectorConfig"],
      appointment["rowTemplate"],
      appointment["dataFields"],
    ),

    receptionistFilterSelectorField(
      "DoctorID",
      "Doctor",
      doctor["filterFields"],
      doctor["selectorConfig"],
      doctor["rowTemplate"],
      doctor["dataFields"],
    ),
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
  ],
};
