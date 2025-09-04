import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../../utils/RoleUtil";

import type { RouteConfig } from "../../routeConfig";

import { doctor } from "../human-resources";
import { appointment } from "./appointment";
import { testType } from "../general/test-type";

export const testOrder: RouteConfig<"TestOrder"> = {
  dataFields: ({ TestType, Appointment }: typesObject["TestOrder"]) => [
    [
      "Test Type",
      TestType,
      "/admin/tests/types/" + TestType.ID,
      "TestType",
      testType.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Appointment",
      Appointment,
      "/admin/appointments/" + Appointment.ID,
      "Appointment",
      appointment.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
  ],
  filterFields: [
    adminFilterSelectorField("AppointmentID", "Appointment", appointment),

    adminFilterSelectorField("DoctorID", "Doctor", doctor),
    ...(admingenerateAuditFields("Doctor") ?? []),
  ],
  selectorDisplay: ({ PatientFullName, TestName }) =>
    PatientFullName + "," + TestName,

  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientFullName, item.TestName],
    [2, 2],
  ],
  subLinks: ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
  ],
};
