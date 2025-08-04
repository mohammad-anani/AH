import type { RouteConfig } from "../../routeConfig";

export const receptionist: RouteConfig<"Receptionist"> = {
  selectorConfig: { selectedDisplay: () => "", path: "" },
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
