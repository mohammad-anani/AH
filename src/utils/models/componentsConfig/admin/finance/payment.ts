import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../../routeConfig";

import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { receptionist } from "..";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method, CreatedAt, CreatedByReceptionist }) => [
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
    [
      "Created By",
      CreatedByReceptionist,
      `/admin/human-resources/receptionists/${CreatedByReceptionist.ID}`,
      "Receptionist",
      receptionist.selectorDisplay(CreatedByReceptionist),
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
