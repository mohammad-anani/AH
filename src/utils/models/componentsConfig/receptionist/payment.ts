import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";

import { methods } from "@/utils/models/zod/schemas";

import { bill } from "./bill";
import { receptionistFormSelectorField } from "../utils/RoleUtil";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method, BillID }) => [
    ["Bill", "View Bill", `/admin/bills/${BillID}`],
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
  ],
  filterFields: [],
  selectorDisplay: () => "",
  subLinks: () => [],
  formConfig: [
    receptionistFormSelectorField<"Payment", "Bill">(
      "Bill",
      "BillID",
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
