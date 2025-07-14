import EmployeeForm from "../employee/Form";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function Form() {
  return (
    <>
      <EmployeeForm />
      <label htmlFor="specialization">Specialization:</label>
      <RegisteredInput name="Specialization">
        <input type="text" placeholder="Specialization" />
      </RegisteredInput>
    </>
  );
}
