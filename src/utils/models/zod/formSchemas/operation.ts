import { datetime } from "../reusableSchemas";
import { OperationSchema } from "../schemas/operation";

export const FormOperationSchema = OperationSchema.omit({
  ScheduledDate: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
});
