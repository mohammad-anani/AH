import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

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
import { bill } from "../bill.ts";

export const testAppointment: RouteConfig<"TestAppointment"> = {
  dataFields: ({
    TestOrder,
    Patient,
    ScheduledDate,
    Status,
    Result,
    Notes,
    ResultDate,
    Bill,
  }: typesObject["TestAppointment"]) => [
    TestOrder?.ID
      ? [
          "Test Order",
          TestOrder,
          `/receptionist/tests/orders/${TestOrder.ID}`,
          "TestOrder",
          testOrder.selectorDisplay as SelectorDisplay<EntityKey>,
        ]
      : ["Test Order", "None"],
    [
      "Patient",
      Patient,
      `/receptionist/human-resources/patients/${Patient.ID}`,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Status", Status],
    ["Result", Result],
    ["Notes", Notes?.length ? Notes : "N/A"],
    [
      "Bill",
      Bill,
      "/receptionist/bills/" + Bill.ID,
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
  ],
  filterFields: [
    receptionistFilterSelectorField("Test", "TestType", testType),
    receptionistFilterSelectorField("TestOrder", "TestOrder", testOrder),
    receptionistFilterSelectorField("Patient", "Patient", patient),
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
    ["Notes", "Notes", "text", "both"],
  ],
  selectorDisplay: ({ TestName, PatientName }) => TestName + "," + PatientName,

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
