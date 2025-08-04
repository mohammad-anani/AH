import type { Config } from "../../../routeConfig";

export const receptionist: Config<"Receptionist"> = {
  selectorConfig: { selectedDisplay: () => "", path: "" },
  subLinks: () => [],
  filterFields: [],
  formConfig: [],
  dataFields: () => [],
  rowTemplate: [[], () => [], []],
};
