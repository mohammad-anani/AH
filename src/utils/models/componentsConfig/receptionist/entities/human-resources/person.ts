import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";
import { calculateAge } from "@/utils/formatters/calculateAge";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  stringField,
  numberField,
  phoneField,
  emailField,
  booleanField,
} from "../../../utils/reusableFields";
import type { DisplayingConfig } from "../../../routeConfig";

export const person: DisplayingConfig<"Person"> = {
  dataFields: (person: typesObject["Person"]) => [
    [
      "Full Name",
      `${person.FirstName} ${person.MiddleName} ${person.LastName}`.trim(),
    ],
    ["Gender", person.Gender ? "Female" : "Male"],
    ["Age", calculateAge(person.DateOfBirth)],
    ["Country", person.Country.Name],
    ["Phone", formatPhoneNumber(person.Phone)],
    ["Email", person.Email],
    ["Username", person.Username],
  ],
  filterFields: [
    stringField("FirstName"),
    stringField("MiddleName"),
    stringField("LastName"),
    booleanField("Gender", ["Male", "Female", "All"]),
    numberField("Age"),
    phoneField("Phone"),
    emailField("Email"),
    ["CountryName", "custom", CountrySelectCallBack],
    stringField("Username"),
  ],
  formConfig: [
    ["First Name", "FirstName", "string", "both"],
    ["Middle Name", "MiddleName", "string", "both"],
    ["Last Name", "LastName", "string", "both"],
    ["Birth Date", "DateOfBirth", "date", "both"],
    ["Gender", "Gender", "boolean", "both", ["Male", "Female", "None"]],
    ["Country", "Country.ID", "custom", "both", CountrySelectCallBack],
    ["Phone", "Phone", "phone", "both"],
    ["Email", "Email", "email", "both"],
    ["Username", "Username", "string", "both"],
  ],
  selectorConfig: { selectedDisplay: () => "", path: "" },
};
