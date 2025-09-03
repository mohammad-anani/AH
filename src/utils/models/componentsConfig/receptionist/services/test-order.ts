import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { datetimeField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil";
import { appointment } from "./appointment";
import { doctor } from "../human-resources";
import { testType } from "../general/test-type";

export const testOrder: RouteConfig<"TestOrder"> = {
  dataFields: ({ TestType, Appointment }: typesObject["TestOrder"]) => [
    [
      "Test Type",
      TestType,
      "/receptionist/tests/types/" + TestType.ID,
      "TestType",
      testType.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Appointment",
      Appointment,
      "/receptionist/appointments/" + Appointment.ID,
      "Appointment",
      appointment.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
  ],
  filterFields: [
    receptionistFilterSelectorField("Appointment", "Appointment", appointment),

    receptionistFilterSelectorField("DoctorID", "Doctor", doctor),
    datetimeField("OrderAt"),
  ],
  formConfig: [],
  selectorDisplay: ({ PatientFullName, TestName }) =>
    PatientFullName + "," + TestName,
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientFullName, item.TestName],
    [2, 2],
  ],
  subLinks: ({ ID }) => [
    [
      "Show Test Appointments",
      `/receptionist/tests/appointments?TestOrderID=${ID}`,
    ],
    ["Reserve", "reserve"],
  ],
};
