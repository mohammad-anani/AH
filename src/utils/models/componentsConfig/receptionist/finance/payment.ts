import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../../routeConfig";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method }) => [
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
  ],

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
