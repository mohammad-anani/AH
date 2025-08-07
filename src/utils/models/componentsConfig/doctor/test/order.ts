import type { typesObject } from "../../../types/normal/typesObject";
import { datetimeField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil";
import { appointment } from "../../receptionist/appointment";
import { testType } from "./type";

export const testOrder: RouteConfig<"TestOrder"> = {
  dataFields: ({ TestTypeID, AppointmentID }: typesObject["TestOrder"]) => [
    ["Test Type", "View Type", "/doctor/tests/types/" + TestTypeID, "TestType"],
    [
      "Appointment",
      "View Appointment",
      "/doctor/appointments/" + AppointmentID,
      "TestType",
    ],
  ],
  filterFields: [
    receptionistFilterSelectorField("Appointment", "Appointment", appointment),

    receptionistFilterSelectorField("DoctorID", "TestType", testType),
    datetimeField("OrderAt"),
  ],
  formConfig: [],
  selectorDisplay: ({ TestName }) => TestName,
  rowTemplate: [
    ["Patient", "Test"],
    (item) => [item.PatientName, item.TestName],
    [2, 2],
  ],
  subLinks: () => [],
};
