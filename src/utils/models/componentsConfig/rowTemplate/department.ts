import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { RowTemplate } from "../routeConfig";

export const departmentRowTemplate: RowTemplate<"Department"> = [
  ["Name", "Phone"],
  (item) => [item.Name, formatPhoneNumber(item.Phone)],
  [2, 1],
];
