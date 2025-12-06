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
