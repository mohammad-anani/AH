import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const prescriptionSelectorConfig: SelectorConfig<"Prescription"> = {
  selectedDisplay: () => "1",
  path: "/admin/prescriptions",
};
