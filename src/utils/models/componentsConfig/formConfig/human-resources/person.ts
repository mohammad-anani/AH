// personForm.ts
import type { FormKey } from "../../../types/utils/Form&Filter";
import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";

export const genderLabels = ["Male", "Female", "None"];

export const personForm: FormKey<"Person">[] = [
  ["First Name", "FirstName", "string", "both"],
  ["Middle Name", "MiddleName", "string", "both"],
  ["Last Name", "LastName", "string", "both"],
  ["Birth Date", "DateOfBirth", "date", "both"],
  ["Gender", "Gender", "boolean", "both", genderLabels],
  ["Country", "Country.ID", "custom", "both", CountrySelectCallBack],
  ["Phone", "Phone", "phone", "both"],
  ["Email", "Email", "email", "both"],
  ["Username", "Username", "string", "both"],
];
