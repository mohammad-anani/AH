import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const adminSelectorConfig: SelectorConfig<"Admin"> = {
  selectedDisplay: ({ Name }) => Name,
  path: "/admin/human-resources/admins",
};
