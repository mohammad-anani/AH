import type { Person } from "../../utils/types";
import PhoneInput from "../../ui/PhoneInput";
import { emptyPerson } from "../../utils/emptyObjects";

export default function AddUpdatePerson({
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
      <input
        type="text"
        value={!add ? FirstName : ""}
        placeholder="First Name"
      />

      <input
        type="text"
        value={!add ? MiddleName : ""}
        placeholder="Middle Name"
      />

      <input type="text" value={!add ? LastName : ""} placeholder="Last Name" />

      <input type="number" value={!add ? Age : ""} placeholder="Age" />

      <select value={!add ? Gender : ""}>
        <option value="">Select Gender</option>
        <option value="true">Male</option>
        <option value="false">Female</option>
      </select>

      <select value={!add ? CountryName : ""}>
        <option value="">Select Country</option>

        <option value="Lebanon">Lebanon</option>
        <option value="France">France</option>
      </select>

      <PhoneInput
        name="phone"
        initialValue={!add ? Phone : ""}
        format="xx xxx xxx"
        placeholder="Phone Number"
      />

      <input type="email" value={!add ? Email : ""} placeholder="Email" />

      <input type="text" value={!add ? Username : ""} placeholder="Username" />
    </>
  );
}
