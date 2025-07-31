import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../reusableSchemas";

export const CountrySchema = z.object({
  ID: positiveNumber("Country ID"),
  Name: nonEmptyString("Country Name"),
});
