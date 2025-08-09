import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { methods } from "@/utils/models/zod/schemas";

import { bill } from "./bill";
import { receptionistFormSelectorField } from "../utils/RoleUtil";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method, Bill }) => [
    [
      "Bill",
      Bill,
      `/admin/bills/${Bill.ID}`,
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
  ],
  filterFields: [],
  selectorDisplay: () => "",
  subLinks: () => [],
  formConfig: [
    receptionistFormSelectorField<"Payment", "Bill">(
      "Bill",
      "Bill.ID",
      "Bill",
      "add",
      bill,
    ),
    ["Amount", "Amount", "money", "add"],
    ["Method", "Method", "uniselect", "add", methods],
  ],
  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
