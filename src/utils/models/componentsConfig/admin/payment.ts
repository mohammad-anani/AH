import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../routeConfig";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

export const payment: RouteConfig<"Payment"> = {
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
  formConfig: [],
  rowTemplate: [
    ["Amount", "Method"],
    ({ Amount, Method }) => [formatMoney(Amount), Method],
    [1, 1],
  ],
};
