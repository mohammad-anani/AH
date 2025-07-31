// personFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  booleanField,
  numberField,
  phoneField,
  emailField,
} from "../reusableFields";
import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";

export const personFields: FilterKey[] = [
  stringField("FirstName"),
  stringField("MiddleName"),
  stringField("LastName"),
  booleanField("Gender", ["Male", "Female", "All"]),
  numberField("Age"),
  phoneField("Phone"),
  emailField("Email"),
  ["CountryName", "custom", CountrySelectCallBack],
  stringField("Username"),
];
