import type { Department } from "../../utils/types";
import PhoneInput from "../../ui/PhoneInput";
import { emptyDepartment } from "../../utils/emptyObjects";

export default function DepartmentForm({
  department = emptyDepartment,
}: {
  department?: Department;
}) {
  const { Name, Phone } = department;

  const add = department.ID === -1;

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        defaultValue={!add ? Name : ""}
        placeholder="Department Name"
      />

      <label htmlFor="phone">Phone:</label>
      <PhoneInput
        name="phone"
        initialValue={!add ? Phone : ""}
        format="xx xxx xxx"
        placeholder="Department Phone"
      />
    </>
  );
}
