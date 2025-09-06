import type { typesObject } from "@/utils/models/types/normal/typesObject";

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
      testType.selectorDisplay(TestType),
    ],
    [
      "Appointment",
      Appointment,
      "/doctor/appointments/" + Appointment.ID,
      "Appointment",
      appointment.selectorDisplay,
    ],
  ],
  formConfig: [],
  selectorDisplay: ({ PatientFullName, TestTypeName }) =>
    PatientFullName + "," + TestTypeName,
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientFullName, item.TestTypeName],
    [2, 2],
  ],
};
