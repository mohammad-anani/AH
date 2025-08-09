import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

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
import { bill } from "../bill.ts";
import { receptionist } from "../human-resources/receptionist.ts";

export const testAppointment: RouteConfig<"TestAppointment"> = {
  dataFields: ({
    TestOrder,
    Patient,
    ScheduledDate,
    Status,
    Result,
    Notes,
    ResultDate,
    CreatedByReceptionist,
    CreatedAt,
    Bill,
  }: typesObject["TestAppointment"]) => [
    TestOrder?.ID
      ? [
          "Test Order",
          TestOrder,
          `/admin/tests/orders/${TestOrder.ID}`,
          "TestOrder",
          testOrder.selectorDisplay as SelectorDisplay<EntityKey>,
        ]
      : ["Test Order", "None"],
    [
      "Patient",
      Patient,
      `/admin/human-resources/patients/${Patient.ID}`,
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
      "/admin/bills/" + Bill.ID,
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Result Date", ResultDate ? formatDateIsoToLocal(ResultDate) : "N/A"],
    [
      "Created By",
      CreatedByReceptionist || "N/A",
      CreatedByReceptionist
        ? `/admin/human-resources/receptionists/${CreatedByReceptionist.ID}`
        : "",
      "Receptionist",
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
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
