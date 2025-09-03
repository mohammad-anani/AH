import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../../routeConfig";

import { methods } from "@/utils/models/zod/schemas";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method }) => [
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
  ],
  filterFields: [],
  selectorDisplay: () => "",
  subLinks: () => [],
  formConfig: [
    ["Amount", "Amount", "money", "add"],
    ["Method", "Method", "uniselect", "add", methods as unknown as string[]],
  ],
  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
