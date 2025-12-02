import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const DoctorRowSchema = z.object({
  ID: positiveNumber("Doctor ID", 1),
  FullName: nonEmptyString("Full name", 3, 60),
  Specialization: nonEmptyString("Specialization", 5, 100),
});

export const CountryRowSchema = z.object({
  ID: positiveNumber("Country ID"),
  Name: nonEmptyString("Country Name"),
});
