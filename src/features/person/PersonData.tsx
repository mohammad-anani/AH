import formatPhoneNumber from "@/utils/formatPhoneNumber";
import type { Person } from "../../utils/types";

export default function PersonData({ person }: { person: Person }) {
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
      <span>{Gender}</span>
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
