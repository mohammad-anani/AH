import type { Config } from "../../routeConfig";

export const prescription: Config<"Prescription"> = {
  selectorConfig: { selectedDisplay: () => "", path: "" },
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
