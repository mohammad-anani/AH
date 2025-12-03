import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import type { RouteConfig } from "../../routeConfig";
import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../../utils/RoleUtil";
import { testType } from "../general/test-type";
import { service } from "./service";
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
          `/admin/services/test-orders/${TestOrder.ID}`,
          "TestOrder",
          testOrder.selectorDisplay(TestOrder),
        ]
        : ["Test Order", "None"],
      [
        "Test Type",
        TestType,
        `/admin/general/test-types/${TestType.ID}`,
        "TestType",
        testType.selectorDisplay(TestType),
      ],

      ...service["dataFields"](Service),
    ],
  filterFields: [
    adminFilterSelectorField("TestTypeID", "TestType", testType),
    ...service["filterFields"],
    ...(admingenerateAuditFields("Receptionist") ?? []),
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

