import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";
import { receptionist } from "./human-resources/receptionist";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { SelectorDisplay } from "../../types/utils/selectorTypes";

export const bill: RouteConfig<"Bill"> = {
  dataFields: ({ Amount, AmountPaid, CreatedByReceptionist, CreatedAt }) => [
    ["Amount", formatMoney(Amount)],
    ["Amount Paid", formatMoney(AmountPaid)],
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
