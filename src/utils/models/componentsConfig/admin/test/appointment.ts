import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  datetimeField,
  uniselectField,
  stringField,
} from "../../utils/filterReusableFields.ts";
import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../../utils/RoleUtil.ts";
import type { RouteConfig } from "../../routeConfig.ts";
import { testType } from "./type.ts";
import { testOrder } from "./order.ts";
import { patient } from "../human-resources/patient.ts";

export const testAppointment: RouteConfig<"TestAppointment"> = {
  dataFields: ({
    TestOrderID,
    PatientID,
    ScheduledDate,
    Status,
    Result,
    ResultDate,
    CreatedByReceptionistID,
    CreatedAt,
    BillID,
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
    ["Bill", "View Bill", "/admin/bills/" + BillID, "Bill"],
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
    adminFilterSelectorField("TestTypeID", "TestType", testType),
    adminFilterSelectorField("TestOrderID", "TestOrder", testOrder),
    adminFilterSelectorField("PatientID", "Patient", patient),
    datetimeField("ScheduledDate"),
    uniselectField("Status", ["Cancelled", "Accepted"]),
    stringField("Result"),
    datetimeField("ResultDate"),
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ TestName, PatientName }) =>
      TestName + "," + PatientName,
    path: "/admin/tests/appointments",
  },
  rowTemplate: [
    ["Patient", "Test", "Date", "Status", "Is Paid"],
    (item) => [
      item.PatientName,
      item.TestName,
      formatDateIsoToLocal(item.Date),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1, 1],
  ],
  subLinks: () => [],
};
