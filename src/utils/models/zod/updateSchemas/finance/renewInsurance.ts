import { z } from "zod";
import { datetimeWithinOneYear, positiveNumber } from "../../reusableSchemas";

export const RenewInsuranceSchema = z.object({
  ExpirationDate: datetimeWithinOneYear("Expiration Date")
  ,
  Coverage: positiveNumber("Coverage", 0.0, 1.0)

});
