import type { typesObject } from "@/utils/models/types/normal/typesObject";

import type { RouteConfig } from "../../routeConfig";

export const insurance: RouteConfig<"Insurance"> = {
  dataFields: ({
    ProviderName,
    Coverage,
    IsActive,
    Patient,
  }: typesObject["Insurance"]) => [

      ["Provider", ProviderName],
      ["Coverage", Coverage * 100 + "%"],
      ["Status", IsActive ? "Active" : "Inactive"],
    ],
  formConfig: [
    ["Provider Name", "ProviderName", "string", "both"],
    ["Coverage", "Coverage", "uniselect", "both", Array.from({ length: 10 }, (_, i) => ((i + 1) / 10).toString())],
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
