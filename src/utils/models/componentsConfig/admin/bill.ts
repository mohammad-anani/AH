import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";

export const bill: RouteConfig<"Bill"> = {
  dataFields: ({ Amount, AmountPaid, CreatedByReceptionistID, CreatedAt }) => [
    ["Amount", formatMoney(Amount)],
    ["Amount Paid", formatMoney(AmountPaid)],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Admin",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
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
  formConfig: [],
  selectorDisplay: ({ AmountPaid, Amount }) =>
    `Amount: ${formatMoney(Amount ?? "")}  |  Paid: ${formatMoney(AmountPaid ?? "")}`,
  subLinks: ({ ID }) => [["Show Payments", `/admin/payments?BillID=${ID}`]],
};

//disable given state input

//  ["Make a Payment", `/admin/payments/add`, { BillID: ID }],
