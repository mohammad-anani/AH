import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { formatMoney } from "@/utils/formatters/formatMoney";
import type { Config } from "../../routeConfig";

export const bill: Config<"Bill"> = {
  dataFields: ({ Amount, AmountPaid, CreatedByReceptionistID, CreatedAt }) => [
    ["Amount", formatMoney(Amount)],
    ["Amount Paid", formatMoney(AmountPaid)],
    [
      "Created By",
      "View Admin",
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
  formConfig: [["Amount", "Amount", "money", "both"]],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/bills",
  },
  subLinks: ({ ID }) => [
    ["Show Payments", `payments`],
    ["Make a Payment", `/payments/${ID}`],
  ],
};
