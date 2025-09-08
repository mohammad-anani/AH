import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../../routeConfig";

export const payment: RouteConfig<"Payment"> = {
  dataFields: ({ Amount, Method }) => [
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
  ],

  formConfig: [
    ["Amount", "Amount", "money", "add"],
    [
      "Method",
      "Method",
      "uniselect",
      "add",
      [
        { label: "Card", value: "Card" },
        { label: "Cash", value: "Cash" },
      ],
    ],
  ],
  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
