import type { RouteConfig } from "../../routeConfig";

export const prescription: RouteConfig<"Prescription"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
