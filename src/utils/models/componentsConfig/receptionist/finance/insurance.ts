import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import type { RouteConfig } from "../../routeConfig";
import { patient } from "..";

export const insurance: RouteConfig<"Insurance"> = {
  dataFields: ({
    ProviderName,
    Coverage,
    IsActive,
    Patient,
  }: typesObject["Insurance"]) => [
    [
      "Patient",
      Patient,
      "/admin/human-resources/patients/" + Patient.ID,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Provider", ProviderName],
    ["Coverage", Coverage * 100 + "%"],
    ["Status", IsActive ? "Active" : "Inactive"],
  ],
  formConfig: [
    ["Provider Name", "ProviderName", "string", "both"],
    ["Coverage", "Coverage", "number", "both"],
    ["Expiration Date", "ExpirationDate", "date", "both"],
  ],
  selectorDisplay: ({ ProviderName, Coverage, IsActive }) =>
    ProviderName + " | Coverage:" + Coverage + " | " + IsActive
      ? "Active"
      : "Inactive",

  rowTemplate: [
    ["Provider", "Coverage", "status"],
    (item) => [
      item.ProviderName,
      item.Coverage * 100 + "%",
      item.IsActive ? "Active" : "Inactive",
    ],
    [1, 1, 1],
  ],
};
