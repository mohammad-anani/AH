import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const testTypeSelectorConfig: SelectorConfig<"TestType"> = {
  selectedDisplay: ({ Name }) => Name,
  path: "/admin/tests/types",
};
