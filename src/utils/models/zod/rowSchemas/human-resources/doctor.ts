import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const DoctorRowSchema = z.object({
  ID: positiveNumber("Doctor ID", 1),
  FullName: nonEmptyString("Full name").min(3).max(60, {
    message: "Full name must be between 3 and 60 characters.",
  }),
  Specialization: nonEmptyString("Specialization").min(5).max(100, {
    message: "Specialization must be between 5 and 100 characters.",
  }),
});

export const CountryRowSchema = z.object({
  ID: positiveNumber("Country ID"),
  Name: nonEmptyString("Country Name"),
});
