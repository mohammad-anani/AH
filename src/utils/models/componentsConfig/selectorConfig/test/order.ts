import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const testOrderSelectorConfig: SelectorConfig<"TestOrder"> = {
  selectedDisplay: ({ ID }) => String(ID),
  path: "/admin/tests/orders",
};
