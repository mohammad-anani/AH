import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  datetimeField,
  uniselectField,
  stringField,
} from "../../utils/reusableFields.ts";
import { patient } from "../human-resources/patient.ts";
import {
  adminSelectorField,
  admingenerateAuditFields,
} from "../../utils/adminRoleUtil.ts";
import { testOrder } from "./order.ts";
import type { Config } from "../../../routeConfig.ts";

export const testAppointment: Config<"TestAppointment"> = {
  dataFields: ({
    TestOrderID,
    PatientID,
    ScheduledDate,
    Status,
    Result,
    ResultDate,
    CreatedByReceptionistID,
    CreatedAt,
  }: typesObject["TestAppointment"]) => [
    TestOrderID
      ? [
          "Test Order",
          "View Test Order",
          `/admin/tests/orders/${TestOrderID}`,
          "TestOrder",
        ]
      : ["Test Order", "None"],
    [
      "Patient",
      "View Patient",
      `/admin/human-resources/patients/${PatientID}`,
      "Patient",
    ],
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Status", Status],
    ["Result", Result],
    ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    adminSelectorField(
      "TestOrderID",
      "TestOrder",
      testOrder["filterFields"],
      testOrder.selectorConfig,
      testOrder.rowTemplate,
      testOrder.dataFields,
    ),
    adminSelectorField(
      "PatientID",
      "Patient",
      patient["filterFields"],
      patient.selectorConfig,
      patient.rowTemplate,
      patient.dataFields,
    ),
    datetimeField("ScheduledDate"),
    uniselectField("Status", ["Cancelled", "Accepted"]),
    stringField("Result"),
    datetimeField("ResultDate"),
    ...admingenerateAuditFields("Receptionist"),
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ TestName, PatientName }) =>
      TestName + "," + PatientName,
    path: "/admin/tests/appointments",
  },
  rowTemplate: [
    ["Patient", "Test", "Date"],
    (item) => [
      item.PatientName,
      item.TestName,
      formatDateIsoToLocal(item.Date),
    ],
    [1, 1, 1],
  ],
  subLinks: () => [],
};
