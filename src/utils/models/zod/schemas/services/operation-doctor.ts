import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const OperationDoctorSchema = z.object({
  DoctorID: positiveNumber("Doctor ID", 1),

  Role: nonEmptyString("Role").min(10).max(50, {
    message: "Role must be between 10 and 50 characters.",
  }),
});
