import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { adminSelectorField } from "../../utils/adminRoleUtil";
import { datetimeField } from "../../utils/reusableFields";
import { admin } from "../human-resources";
import { appointment } from "../appointment";
import type { Config } from "../../../routeConfig";

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
    adminSelectorField(
      "AppointmentID",
      "Appointment",
      appointment["filterFields"],
      appointment.selectorConfig,
      appointment.rowTemplate,
      appointment.dataFields,
    ),

    adminSelectorField(
      "AdminID",
      "Admin",
      admin["filterFields"],
      admin.selectorConfig,
      admin.rowTemplate,
      admin.dataFields,
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
