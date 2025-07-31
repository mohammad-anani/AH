import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const patientSelectorConfig: SelectorConfig<"Patient"> = {
  selectedDisplay: ({ Name }) => Name,
  path: "/admin/human-resources/patients",
};
