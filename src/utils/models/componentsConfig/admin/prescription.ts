import type { RouteConfig } from "../routeConfig";

export const prescription: RouteConfig<"Prescription"> = {
  selectorConfig: { selectedDisplay: () => "", path: "" },
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
