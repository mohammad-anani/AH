import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const departmentSelectorConfig: SelectorConfig<"Department"> = {
  selectedDisplay: ({ Name }) => Name,
  path: "/admin/departments",
};
