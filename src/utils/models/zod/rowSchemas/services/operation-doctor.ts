import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const OperationDoctorRowSchema = z.object({
  ID: positiveNumber("Operation Doctor ID", 1),
  DoctorID: positiveNumber("Doctor ID", 1),
  DoctorFullName: nonEmptyString("Doctor full name", 3, 60),
  Role: nonEmptyString("Role", 10, 50),
});
