import type { typesObject } from "@/utils/models/types/normal/typesObject";

import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { service } from "../../admin/services/service";
import type { RouteConfig } from "../../routeConfig";
import {
  datetimeField,
  stringField,
  uniselectField,
} from "../../utils/filterReusableFields";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../../utils/RoleUtil";
import { testType } from "../general/test-type";
import { patient } from "../human-resources";
import { testOrder } from "./test-order";

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
          `/receptionist/test-orders/${TestOrder.ID}`,
          "TestOrder",
          testOrder.selectorDisplay(TestOrder),
        ]
        : ["Test Order", "None"],
      [
        "Test Type",
        TestType,
        `/receptionist/general/test-types/${TestType.ID}`,
        "TestType",
        testType.selectorDisplay(TestType),
      ],

      ...service["dataFields"](Service),
    ],
  filterFields: [
    receptionistFilterSelectorField("Test", "TestType", testType),
    receptionistFilterSelectorField("Patient", "Patient", patient),
    datetimeField("ScheduledDate"),
    uniselectField("Status", ["Cancelled", "Accepted"]),
    stringField("Result"),
    datetimeField("ResultDate"),
  ],
  formConfig: [
    receptionistFormSelectorField(
      "Test Type",
      "TestTypeID",
      "TestType",
      "add",
      testType,
    ),

    ...service["formConfig"],
  ],
  selectorDisplay: ({ TestTypeName, PatientFullName }) =>
    TestTypeName + " | " + PatientFullName,

  rowTemplate: [
    ["Patient", "Test", "Date", "Status", "Is Paid"],
    (item) => [
      item.PatientFullName,
      item.TestTypeName,
      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 2, 1, 1],
  ],
  subLinks: () => [],
};
