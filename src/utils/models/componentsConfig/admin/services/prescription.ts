import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { adminFilterSelectorField } from "../../utils/RoleUtil";
import { stringField, booleanField } from "../../utils/filterReusableFields";

import type { RouteConfig } from "../../routeConfig";
import { appointment } from "./appointment";

export const prescription: RouteConfig<"Prescription"> = {
  dataFields: ({
    ID,
    AppointmentID,
    Medication,
    Dosage,
    Frequency,
    IsOnMedication,
  }: typesObject["Prescription"]) => [
    ["ID", ID],
    ["Appointment ID", AppointmentID],
    ["Medication", Medication],
    ["Dosage", Dosage],
    ["Frequency", Frequency],
    ["Is On Medication", IsOnMedication ? "Yes" : "No"],
  ],
  filterFields: [
    adminFilterSelectorField("AppointmentID", "Appointment", appointment),
    stringField("Medication"),
    stringField("Dosage"),
    stringField("Frequency"),
    booleanField("IsOnMedication", ["On Medication", "Not On Medication"]),
  ],
  formConfig: [],
  selectorDisplay: ({ ID }) => `Prescription #${ID}`,
  rowTemplate: [
    ["ID", "Medication", "Dosage", "Frequency", "Is On Medication"],
    (item) => [
      item.ID.toString(),
      item.Medication,
      item.Dosage,
      item.Frequency,
      item.IsOnMedication ? "Yes" : "No",
    ],
    [1, 2, 1, 1, 1],
  ],
  subLinks: () => [],
};
