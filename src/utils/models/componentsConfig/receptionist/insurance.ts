import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import { statusLabels } from "./human-resources/employee";
import type { RouteConfig } from "../routeConfig";
import { receptionistFormSelectorField } from "../utils/RoleUtil";
import { patient } from "./human-resources";

export const insurance: RouteConfig<"Insurance"> = {
  dataFields: ({
    ProviderName,
    Coverage,
    isActive,
    Patient,
  }: typesObject["Insurance"]) => [
    [
      "Patient",
      Patient,
      "/receptionist/human-resources/patients/" + Patient.ID,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
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
      "Patient.ID",
      "Patient",
      "add",
      patient,
    ),
    ["Provider Name", "ProviderName", "string", "both"],
    ["Coverage", "Coverage", "number", "both"],
    ["Expiration Date", "ExpirationDate", "date", "both"],
    ["Status", "isActive", "boolean", "update", statusLabels],
  ],
  selectorDisplay: ({ ID }) => String(ID),

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
