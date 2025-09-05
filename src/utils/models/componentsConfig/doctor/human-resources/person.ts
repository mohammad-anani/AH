import { CountryFilterSelectCallBack } from "@/features/Country/CountrySelectCallback";
import { calculateAge } from "@/utils/formatters/calculateAge";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  stringField,
  numberField,
  phoneField,
  emailField,
  booleanField,
} from "../../utils/filterReusableFields";
import type { DisplayingConfig } from "../../routeConfig";

export const person: DisplayingConfig<"Person"> = {
  dataFields: (person: typesObject["Person"]) => [
    [
      "Full Name",
      `${person.FirstName} ${person.MiddleName} ${person.LastName}`.trim(),
    ],
    ["Gender", person.Gender ? "Female" : "Male"],
    ["Age", calculateAge(person.BirthDate)],
    ["Country", person.Country.Name],
    ["Phone", formatPhoneNumber(person.Phone)],
    ["Email", person.User.Email],
  ],
  filterFields: [
    stringField("FirstName"),
    stringField("MiddleName"),
    stringField("LastName"),
    booleanField("Gender", ["Male", "Female", "All"]),
    numberField("Age"),
    phoneField("Phone"),
    emailField("Email"),
    ["CountryName", "custom", CountryFilterSelectCallBack],
  ],
};
