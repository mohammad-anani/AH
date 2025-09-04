import { z } from "zod";

// PersonFormDTO - standalone form schema with all person fields
export const FormPersonSchema = z.object({
  FirstName: z
    .string()
    .min(3, "First name must be between 3 and 20 characters")
    .max(20, "First name must be between 3 and 20 characters")
    .nonempty("First name is required"),

  MiddleName: z
    .string()
    .min(3, "Middle name must be between 3 and 20 characters")
    .max(20, "Middle name must be between 3 and 20 characters")
    .nonempty("Middle name is required"),

  LastName: z
    .string()
    .min(3, "Last name must be between 3 and 20 characters")
    .max(20, "Last name must be between 3 and 20 characters")
    .nonempty("Last name is required"),

  Gender: z
    .string()
    .regex(/^[MF]$/, "Gender must be 'M' or 'F'")
    .nonempty("Gender is required"),

  BirthDate: z
    .string()
    .datetime({ local: true })
    .refine((date) => {
      const birthDate = new Date(date);
      const now = new Date();
      const age = now.getFullYear() - birthDate.getFullYear();
      return age <= 120 && birthDate <= now;
    }, "Birth date must be in the past and within 120 years")
    .refine((val) => val !== "", "Birth date is required"),

  CountryID: z
    .number({ message: "Country ID must be a positive number" })
    .min(1, "Country ID must be a positive number")
    .refine((val) => val > 0, "Country ID is required"),

  Phone: z
    .string()
    .regex(/^[0-9]{8}$/, "Phone must be exactly 8 digits")
    .nonempty("Phone is required"),

  Email: z
    .string()
    .min(6, "Email must be between 6 and 40 characters")
    .max(40, "Email must be between 6 and 40 characters")
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Invalid email format")
    .nonempty("Email is required"),
});

export type FormPersonType = z.infer<typeof FormPersonSchema>;
