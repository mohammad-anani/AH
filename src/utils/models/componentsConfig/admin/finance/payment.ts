import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../../routeConfig";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
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
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [],
  selectorDisplay: () => "",
  subLinks: () => [],
  formConfig: [
    ["Amount", "Amount", "number", "add"],
    [
      "Method",
      "Method",
      "uniselect",
      "add",
      [
        { label: "Card", value: 1 },
        { label: "Cash", value: 2 },
      ],
    ],
  ],
  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
