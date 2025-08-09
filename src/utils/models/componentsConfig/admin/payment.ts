import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { bill } from "./bill";
import { receptionist } from "./human-resources/receptionist";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method, Bill, CreatedAt, CreatedByReceptionist }) => [
    [
      "Bill",
      Bill,
      `/admin/bills/${Bill.ID}`,
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
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
  formConfig: [],
  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
