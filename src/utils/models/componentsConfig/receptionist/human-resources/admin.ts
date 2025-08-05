import type { RouteConfig } from "../../routeConfig";

export const admin: RouteConfig<"Admin"> = {
  selectorDisplay: () => "",
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
