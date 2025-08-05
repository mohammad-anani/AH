import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";

export const bill: RouteConfig<"Bill"> = {
  dataFields: ({ Amount, AmountPaid }) => [
    ["Amount", formatMoney(Amount)],
    ["Amount Paid", formatMoney(AmountPaid)],
  ],
  filterFields: [],
  rowTemplate: [
    ["Amount", "Is Paid"],
    ({ Amount, AmountPaid }) => {
      const isPaid = Amount === AmountPaid ? "Yes" : "No";

      return [formatMoney(Amount), isPaid];
    },
    [1, 1],
  ],
  formConfig: [["Amount", "Amount", "money", "both"]],
  selectorConfig: {
    selectedDisplay: ({ AmountPaid, Amount }) =>
      `Amount: ${formatMoney(Amount ?? "")}  |  Paid: ${formatMoney(AmountPaid ?? "")}`,
    path: "/receptionist/bills",
  },
  subLinks: ({ ID }) => [
    ["Show Payments", `/receptionist/payments?BillID=${ID}`],
    ["Make a Payment", "pay"],
  ],
};

//disable given state input

//  ["Make a Payment", `/admin/payments/add`, { BillID: ID }],
