import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const receptionistSelectorConfig: SelectorConfig<"Receptionist"> = {
  selectedDisplay: ({ Name }) => Name,
  path: "/admin/human-resources/receptionists",
};
