import * as humanResources from "./human-resources";
import * as general from "./general";
import * as finance from "./finance";
import * as services from "./services";

export const schemas = {
  ...humanResources,
  ...general,
  ...finance,
  ...services,
};
