import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { Person } from "../../../utils/models/types";
import { emptyPerson } from "@/utils/models/emptyObjects";
import type { EmptyPerson } from "@/utils/models/emptyObjectsTypes";

export default function Data({
  person = emptyPerson,
}: {
  person: Person | EmptyPerson;
}) {
  const {
    FirstName,
    MiddleName,
    LastName,
    Age,
    Gender,
    CountryName,
    Phone,
    Email,
    Username,
  } = person;

  return (
    <>
      <span>Full Name:</span>
      <span>{FirstName + " " + MiddleName + " " + LastName}</span>
      <span>Gender:</span>
      <span>{Gender ? "Female" : "Male"}</span>
      <span>Age:</span>
      <span>{Age}</span>
      <span>Country:</span>
      <span>{CountryName}</span>
      <span>Phone:</span>
      <span>{formatPhoneNumber(Phone)}</span>
      <span>Email:</span>
      <span>{Email}</span>
      <span>Username:</span>
      <span>{Username}</span>
    </>
  );
}
