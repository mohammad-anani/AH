import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { statusLabels } from "./human-resources/employee";
import type { Config } from "../../routeConfig";

export const insurance: Config<"Insurance"> = {
  dataFields: ({
    ProviderName,
    Coverage,
    isActive,
    CreatedAt,
    PatientID,
    CreatedByReceptionistID,
  }: typesObject["Insurance"]) => [
    [
      "Patient",
      "View Patient",
      "/admin/human-resources/patients/" + PatientID,
      "Patient",
    ],
    ["Provider", ProviderName],
    ["Coverage", Coverage * 100 + "%"],
    ["Status", isActive ? "Active" : "Inactive"],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [],
  //solve patient id selector here
  formConfig: [
    ["Provider Name", "ProviderName", "string", "both"],
    ["Coverage", "Coverage", "number", "both"],
    ["Expiration Date", "ExpirationDate", "date", "both"],
    ["Status", "isActive", "boolean", "update", statusLabels],
  ],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/insurances",
  },
  rowTemplate: [
    ["Provider", "Coverage", "status"],
    (item) => [
      item.ProviderName,
      item.Coverage * 100 + "%",
      item.isActive ? "Active" : "Inactive",
    ],
    [1, 1, 1],
  ],
  subLinks: () => [],
};
