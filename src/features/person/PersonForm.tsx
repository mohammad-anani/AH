import Controller from "@/ui/customComponents/Controller";
import PhoneInput from "../../ui/customComponents/PhoneInput";
import RegisteredInput from "../../ui/customComponents/RegisteredInput";

export default function PersonForm({
  fieldPrefix = "",
}: {
  fieldPrefix?: string;
}) {
  const prefix = fieldPrefix + "Person.";

  return (
    <>
      <label htmlFor="firstName">First Name:</label>
      <RegisteredInput name={`${prefix}FirstName`}>
        <input type="text" placeholder="First Name" />
      </RegisteredInput>

      <label htmlFor="middleName">Middle Name:</label>
      <RegisteredInput name={`${prefix}MiddleName`}>
        <input type="text" placeholder="Middle Name" />
      </RegisteredInput>

      <label htmlFor="lastName">Last Name:</label>
      <RegisteredInput name={`${prefix}LastName`}>
        <input type="text" placeholder="Last Name" />
      </RegisteredInput>

      <label htmlFor="age">Age:</label>
      <RegisteredInput name={`${prefix}Age`}>
        <input type="number" placeholder="Age" />
      </RegisteredInput>

      <label htmlFor="gender">Gender:</label>
      <RegisteredInput name={`${prefix}Gender`}>
        <select>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </RegisteredInput>

      <label htmlFor="country">Country:</label>
      <RegisteredInput name={`${prefix}CountryName`}>
        <select>
          <option value="">Select Country</option>
          <option value="Lebanon">Lebanon</option>
          <option value="France">France</option>
          <option value="USA">USA</option>
        </select>
      </RegisteredInput>

      <label htmlFor="phone">Phone Number:</label>
      <Controller
        name={`${prefix}Phone`}
        renderField={({ field, isSubmitting }) => (
          <PhoneInput
            name={field.name}
            format="xx xxx xxx"
            disabled={isSubmitting}
            placeholder="Phone Number"
            initialValue={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <label htmlFor="email">Email:</label>
      <RegisteredInput name={`${prefix}Email`}>
        <input type="email" placeholder="Email" />
      </RegisteredInput>

      <label htmlFor="username">Username:</label>
      <RegisteredInput name={`${prefix}Username`}>
        <input type="text" placeholder="Username" />
      </RegisteredInput>
    </>
  );
}
