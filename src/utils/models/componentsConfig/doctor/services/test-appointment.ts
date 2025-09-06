import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  datetimeField,
  uniselectField,
  stringField,
} from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { testOrder } from "./test-order";
import { testType } from "../general/test-type";
import { service } from "../../admin/services/service";

export const testAppointment: RouteConfig<"TestAppointment"> = {
  dataFields: ({
    TestOrder,
    TestType,
    Service,
  }: typesObject["TestAppointment"]) => [
    TestOrder?.ID
      ? [
          "Test Order",
          TestOrder,
          `/doctor/services/test-orders/${TestOrder.ID}`,
          "TestOrder",
          testOrder.selectorDisplay(TestOrder),
        ]
      : ["Test Order", "None"],
    [
      "Test Type",
      TestType,
      `/doctor/general/test-types/${TestType.ID}`,
      "TestType",
      testType.selectorDisplay(TestType),
    ],

    ...service["dataFields"](Service),
  ],
  filterFields: [
    stringField("TestName"),
    datetimeField("ScheduledDate"),
    uniselectField("Status", ["Completed", "Pending", "Cancelled"]),
    stringField("Result"),
    datetimeField("ResultDate"),
    stringField("Notes"),
    ...service["filterFields"],
  ],
  selectorDisplay: ({ TestTypeName, PatientFullName, Status }) =>
    TestTypeName + " | " + PatientFullName + " | " + Status,

  rowTemplate: [
    ["Patient", "Test", "Date", "Status", "Is Paid"],
    (item) => [
      item.PatientFullName,
      item.TestTypeName,
      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1, 1],
  ],
};
