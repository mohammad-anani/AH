import type { typesObject } from "@/utils/models/types/normal/typesObject";

import type { RouteConfig } from "../../routeConfig";

export const prescription: RouteConfig<"Prescription"> = {
  dataFields: ({
    Diagnosis,
    MedicationStart,
    MedicationEnd,
    Medication,
    Dosage,
    Frequency,
    Notes,
  }: typesObject["Prescription"]) => [
      ["Diagnosis", Diagnosis],
      ["Medication", Medication],
      ["Medication Start", MedicationStart],
      ["Medication End", MedicationEnd],
      ["Dosage", Dosage],
      ["Frequency", Frequency],
      ["Notes", Notes],
    ],
  filterFields: [],
  formConfig: [
    ["Diagnosis", "Diagnosis", "text", "both"],
    ["Medication", "Medication", "string", "both"],
    ["Dosage", "Dosage", "string", "both"],
    ["Frequency", "Frequency", "string", "both"],
    ["Medication Start", "MedicationStart", "datetime", "both"],
    ["Medication End", "MedicationEnd", "datetime", "both"],
    ["Notes", "Notes", "text", "both"],
  ],
  selectorDisplay: ({ Medication, Dosage }) => `${Medication} - ${Dosage}`,
  rowTemplate: [
    ["Medication", "Dosage", "Frequency", "Is On Medication"],
    (item) => [
      item.Medication,
      item.Dosage,
      item.Frequency,
      item.IsOnMedication ? "Yes" : "No",
    ],
    [2, 1, 1, 1],
  ],
};
