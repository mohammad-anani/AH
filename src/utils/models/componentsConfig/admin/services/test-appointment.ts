import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../../utils/RoleUtil";
import type { RouteConfig } from "../../routeConfig";
import { testType } from "../general/test-type";
import { testOrder } from "./test-order";
import { service } from "./service";

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
    adminFilterSelectorField("TestOrderID", "TestOrder", testOrder),
    ...service["filterFields"],
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
  selectorDisplay: ({ TestName, PatientFullName, Status }) =>
    TestName + " | " + PatientFullName + " | " + Status,

  rowTemplate: [
    ["Patient", "Test", "Date", "Status", "Is Paid"],
    (item) => [
      item.PatientFullName,
      item.TestName,
      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1, 1],
  ],
};

//payment sublink
