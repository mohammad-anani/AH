import type { typesObject } from "../../../types/normal/typesObject";
import type { EntityKey } from "../../../types/utils/entityKeys";
import type { SelectorDisplay } from "../../../types/utils/selectorTypes";
import { datetimeField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil";
import { appointment } from "../../receptionist/appointment";
import { testType } from "./type";

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
  filterFields: [
    receptionistFilterSelectorField("Appointment", "Appointment", appointment),

    receptionistFilterSelectorField("DoctorID", "TestType", testType),
    datetimeField("OrderAt"),
  ],
  formConfig: [],
  selectorDisplay: ({ PatientName, TestName }) => PatientName + "," + TestName,
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientName, item.TestName],
    [2, 2],
  ],
  subLinks: () => [],
};
