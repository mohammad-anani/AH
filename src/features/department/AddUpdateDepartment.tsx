import type { Department } from "../../utils/types";
import PhoneInput from "../../ui/PhoneInput";
import BackNavigator from "../../ui/BackNavigator";
import { emptyDepartment } from "../../utils/emptyObjects";

export default function AddUpdateDepartment({
  department = emptyDepartment,
}: {
  department?: Department;
}) {
  const { Name, Phone } = department;

  const add = department.ID === -1;
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={!add ? Name : ""} />
      <label htmlFor="phone">Phone:</label>
      <PhoneInput
        name="phone"
        initialValue={!add ? Phone : ""}
        format="xx xxx xxx"
      />
      <BackNavigator pagesBack={1}>
        <button>Save</button>
      </BackNavigator>
    </form>
  );
}
