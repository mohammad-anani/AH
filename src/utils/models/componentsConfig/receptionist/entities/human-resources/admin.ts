import type { Config } from "../../../routeConfig";

export const admin: Config<"Admin"> = {
  selectorConfig: { selectedDisplay: () => "", path: "" },
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
