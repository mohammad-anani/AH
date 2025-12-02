import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const OperationDoctorSchema = z.object({
  DoctorID: positiveNumber("Doctor ID", 1),

  Role: nonEmptyString("Role", 10, 50)
});
