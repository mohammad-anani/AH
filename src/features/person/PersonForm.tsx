import type { Person } from "../../utils/types";
import PhoneInput from "../../ui/PhoneInput";
import { emptyPerson } from "../../utils/emptyObjects";

export default function PersonForm({
  person = emptyPerson,
}: {
  person?: Person;
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

  const add = person.ID === -1;

  return (
    <>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        defaultValue={!add ? FirstName : ""}
        placeholder="First Name"
      />

      <label htmlFor="middleName">Middle Name:</label>
      <input
        type="text"
        name="middleName"
        defaultValue={!add ? MiddleName : ""}
        placeholder="Middle Name"
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        defaultValue={!add ? LastName : ""}
        placeholder="Last Name"
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        name="age"
        defaultValue={!add ? Age : ""}
        placeholder="Age"
      />

      <label htmlFor="gender">Gender:</label>
      <select name="gender" defaultValue={!add ? Gender : ""}>
        <option value="">Select Gender</option>
        <option value="true">Male</option>
        <option value="false">Female</option>
      </select>

      <label htmlFor="country">Country:</label>
      <select name="country" defaultValue={!add ? CountryName : ""}>
        <option value="">Select Country</option>
        <option value="Lebanon">Lebanon</option>
        <option value="France">France</option>
      </select>

      <label htmlFor="phone">Phone Number:</label>
      <PhoneInput
        name="phone"
        initialValue={!add ? Phone : ""}
        format="xx xxx xxx"
        placeholder="Phone Number"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        defaultValue={!add ? Email : ""}
        placeholder="Email"
      />

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        defaultValue={!add ? Username : ""}
        placeholder="Username"
      />
    </>
  );
}
