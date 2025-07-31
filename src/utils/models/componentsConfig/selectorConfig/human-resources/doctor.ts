import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const doctorSelectorConfig: SelectorConfig<"Doctor"> = {
  selectedDisplay: ({ Name }) => Name,
  path: "/admin/human-resources/doctors",
};
