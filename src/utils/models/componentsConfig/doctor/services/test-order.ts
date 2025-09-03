import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import { datetimeField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { appointment } from "./appointment";
import { testType } from "../general/test-type";

export const testOrder: RouteConfig<"TestOrder"> = {
  dataFields: ({ TestType, Appointment }: typesObject["TestOrder"]) => [
    [
      "Test Type",
      TestType,
      "/doctor/tests/types/" + TestType.ID,
      "TestType",
      testType.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Appointment",
      Appointment,
      "/doctor/appointments/" + Appointment.ID,
      "Appointment",
      appointment.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
  ],
  filterFields: [datetimeField("OrderAt")],
  formConfig: [],
  selectorDisplay: ({ PatientFullName, TestName }) =>
    PatientFullName + "," + TestName,
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientFullName, item.TestName],
    [2, 2],
  ],
  subLinks: () => [],
};
