import EmployeeForm from "../employee/EmployeeForm";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function DoctorForm() {
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
