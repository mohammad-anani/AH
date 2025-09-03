import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const OperationDoctorRowSchema = z.object({
  ID: positiveNumber("Operation Doctor ID", 1),
  DoctorID: positiveNumber("Doctor ID", 1),
  DoctorFullName: nonEmptyString("Doctor full name").min(3).max(60, {
    message: "Doctor full name must be between 3 and 60 characters.",
  }),
  Role: nonEmptyString("Role").min(10).max(50, {
    message: "Role must be between 10 and 50 characters.",
  }),
});
