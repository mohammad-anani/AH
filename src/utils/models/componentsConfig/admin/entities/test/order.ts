import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { adminFilterSelectorField } from "../../../utils/RoleUtil";
import { datetimeField } from "../../../utils/reusableFields";
import type { Config } from "../../../routeConfig";
import { appointment } from "../appointment";
import { doctor } from "../human-resources";

export const testOrder: Config<"TestOrder"> = {
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
    adminFilterSelectorField(
      "AppointmentID",
      "Appointment",
      appointment["filterFields"],
      appointment["selectorConfig"],
      appointment["rowTemplate"],
      appointment["dataFields"],
    ),

    adminFilterSelectorField(
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
