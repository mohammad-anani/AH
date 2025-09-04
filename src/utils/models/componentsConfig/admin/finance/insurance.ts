import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import type { RouteConfig } from "../../routeConfig";
import { patient } from "..";
import { receptionist } from "..";

export const insurance: RouteConfig<"Insurance"> = {
  dataFields: ({
    ProviderName,
    Coverage,
    IsActive,
    CreatedAt,
    Patient,
    CreatedByReceptionist,
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
    [
      "Created By",
      CreatedByReceptionist,
      `/admin/human-resources/receptionists/${CreatedByReceptionist.ID}`,
      "Receptionist",
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
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
