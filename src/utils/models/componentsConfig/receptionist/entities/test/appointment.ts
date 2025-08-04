import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  datetimeField,
  uniselectField,
  stringField,
} from "../../../utils/filterReusableFields.ts";
import type { Config } from "../../../routeConfig.ts";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../../../utils/RoleUtil.ts";
import { testOrder } from "./order.ts";
import { patient } from "../human-resources/patient.ts";
import { testType } from "./type.ts";

export const testAppointment: Config<"TestAppointment"> = {
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
    receptionistFilterSelectorField(
      "TestTypeID",
      "TestType",
      testType["filterFields"],
      testType["selectorConfig"],
      testType["rowTemplate"],
      testType["dataFields"],
    ),
    receptionistFilterSelectorField(
      "TestOrderID",
      "TestOrder",
      testOrder["filterFields"],
      testOrder["selectorConfig"],
      testOrder["rowTemplate"],
      testOrder["dataFields"],
    ),
    receptionistFilterSelectorField(
      "PatientID",
      "Patient",
      patient["filterFields"],
      patient["selectorConfig"],
      patient["rowTemplate"],
      patient["dataFields"],
    ),
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
      testType["filterFields"],
      testType["selectorConfig"],
      testType["rowTemplate"],
      testType["dataFields"],
    ),
  ],
  selectorConfig: {
    selectedDisplay: ({ TestName, PatientName }) =>
      TestName + "," + PatientName,
    path: "/receptionist/tests/appointments",
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
