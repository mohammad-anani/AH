import { z } from "zod";
import {
  nonEmptyString,
  date,
  positiveNumber,
  booleanField,
} from "../../reusableSchemas";

export const PersonSchema = z.object({
  FirstName: nonEmptyString("First name").min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  MiddleName: nonEmptyString("Middle name").min(2, {
    message: "Middle name must be at least 2 characters long.",
  }),
  LastName: nonEmptyString("Last name").min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
  Gender: booleanField("Gender"),
  DateOfBirth: date("Date of birth")
    .refine((val) => new Date(val) <= new Date(), {
      message: "Date of birth cannot be in the future.",
    })
    .refine(
      (val) => {
        const min = new Date();
        min.setFullYear(min.getFullYear() - 120);
        return new Date(val) >= min;
      },
      {
        message: "Date of birth cannot be more than 120 years ago.",
      },
    ),
  Country: z.object({
    ID: positiveNumber("Country ID").refine((v) => v > 0, {
      message: "Country ID must be a positive number.",
    }),
    Name: nonEmptyString("Country name"),
  }),
  Phone: nonEmptyString("Phone").length(8, {
    message: "Phone number must be exactly 8 characters.",
  }),
  Email: nonEmptyString("Email").email({
    message: "Please enter a valid email address.",
  }),
  Username: nonEmptyString("Username").min(6, {
    message: "Username must be at least 6 characters long.",
  }),
});
