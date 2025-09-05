import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import {
  datetimeField,
  stringField,
  uniselectField,
} from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../../utils/RoleUtil";
import { testOrder } from "./test-order";
import { testType } from "../general/test-type";
import { service } from "../../admin/services/service";
import { patient } from "../human-resources";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

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
          `/receptionist/services/test-orders/${TestOrder.ID}`,
          "TestOrder",
          testOrder.selectorDisplay as SelectorDisplay<EntityKey>,
        ]
      : ["Test Order", "None"],
    [
      "Test Type",
      TestType,
      `/receptionist/general/test-types/${TestType.ID}`,
      "TestType",
      testType.selectorDisplay as SelectorDisplay<EntityKey>,
    ],

    ...service["dataFields"](Service),
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
    [1, 1, 1, 1, 1],
  ],
  subLinks: () => [],
};
