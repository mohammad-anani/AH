import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const insuranceSelectorConfig: SelectorConfig<"Insurance"> = {
  selectedDisplay: ({ ID }) => String(ID),
  path: "/admin/insurances",
};
