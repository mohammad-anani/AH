import { calculateAge } from "@/utils/formatters/calculateAge";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";

export const person: DataFields<"Person"> = (person: typesObject["Person"]) => [
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
];
