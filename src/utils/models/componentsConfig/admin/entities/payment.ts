import { formatMoney } from "@/utils/formatters/formatMoney";
import type { Config } from "../../routeConfig";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { methods } from "@/utils/models/zod/schemas";
import { selectorField } from "../../utils/formUtils";
import { bill } from "./bill";

export const payment: Config<"Payment"> = {
  dataFields: ({
    Amount,
    Method,
    BillID,
    CreatedAt,
    CreatedByReceptionistID,
  }) => [
    ["Bill", "View Bill", `/admin/bills/${BillID}`],
    ["Amount", formatMoney(Amount)],
    ["Method", Method],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [],
  selectorConfig: { selectedDisplay: () => "", path: "" },
  subLinks: () => [],
  formConfig: [
    selectorField<"Bill", "Payment">(
      "Bill",
      "BillID",
      "Bill",
      "add",
      bill["filterFields"],
      bill["selectorConfig"],
      bill["rowTemplate"],
      bill["dataFields"],
      "Admin",
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
