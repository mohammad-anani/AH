import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  datetimeField,
  uniselectField,
  stringField,
} from "../../utils/filterReusableFields.ts";
import type { RouteConfig } from "../../routeConfig.ts";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../../utils/RoleUtil.ts";
import { testOrder } from "./order.ts";
import { patient } from "../human-resources/patient.ts";
import { testType } from "./type.ts";

export const testAppointment: RouteConfig<"TestAppointment"> = {
  dataFields: ({
    TestOrderID,
    PatientID,
    ScheduledDate,
    Status,
    Result,
    ResultDate,

    BillID,
  }: typesObject["TestAppointment"]) => [
    TestOrderID
      ? [
          "Test Order",
          "View Test Order",
          `/receptionist/tests/orders/${TestOrderID}`,
          "TestOrder",
        ]
      : ["Test Order", "None"],
    [
      "Patient",
      "View Patient",
      `/receptionist/human-resources/patients/${PatientID}`,
      "Patient",
    ],
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Status", Status],
    ["Result", Result],
    ["Bill", "View Bill", "/receptionist/bills/" + BillID, "Bill"],
    ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
  ],
  filterFields: [
    receptionistFilterSelectorField("TestTypeID", "TestType", testType),
    receptionistFilterSelectorField("TestOrderID", "TestOrder", testOrder),
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    datetimeField("ScheduledDate"),
    uniselectField("Status", ["Cancelled", "Accepted"]),
    stringField("Result"),
    datetimeField("ResultDate"),
  ],
  formConfig: [
    receptionistFormSelectorField(
      "Test",
      "TestID",
      "TestType",
      "add",
      testType,
    ),
    receptionistFormSelectorField(
      "Patient",
      "PatientID",
      "Patient",
      "add",
      patient,
    ),
    ["Scheduled Date", "ScheduledDate", "datetime", "both"],
  ],
  selectorConfig: {
    selectedDisplay: ({ TestName, PatientName }) =>
      TestName + "," + PatientName,
    path: "/receptionist/tests/appointments",
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
