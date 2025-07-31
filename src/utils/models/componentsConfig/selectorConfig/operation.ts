import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const operationSelectorConfig: SelectorConfig<"Operation"> = {
  selectedDisplay: ({ ID }) => String(ID),
  path: "/admin/operations",
};
