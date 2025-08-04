import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { statusLabels } from "./human-resources/employee";
import type { RouteConfig } from "../routeConfig";
import { receptionistFormSelectorField } from "../utils/RoleUtil";
import { patient } from "./human-resources";

export const insurance: RouteConfig<"Insurance"> = {
  dataFields: ({
    ProviderName,
    Coverage,
    isActive,
    PatientID,
  }: typesObject["Insurance"]) => [
    [
      "Patient",
      "View Patient",
      "/receptionist/human-resources/patients/" + PatientID,
      "Patient",
    ],
    ["Provider", ProviderName],
    ["Coverage", Coverage * 100 + "%"],
    ["Status", isActive ? "Active" : "Inactive"],
  ],
  filterFields: [],
  //solve patient id selector here
  formConfig: [
    receptionistFormSelectorField(
      "Patient",
      "PatientID",
      "Patient",
      "add",
      patient,
    ),
    ["Provider Name", "ProviderName", "string", "both"],
    ["Coverage", "Coverage", "number", "both"],
    ["Expiration Date", "ExpirationDate", "date", "both"],
    ["Status", "isActive", "boolean", "update", statusLabels],
  ],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/receptionist/insurances",
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
