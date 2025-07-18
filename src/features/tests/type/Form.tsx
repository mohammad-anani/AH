import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function Form() {
  return (
    <>
      <label>Department</label>
      <RegisteredInput name="DepartmentID">
        <select>
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </RegisteredInput>
      <label>Name</label>
      <RegisteredInput name="Name">
        <input type="text" />
      </RegisteredInput>
      <label>Cost</label>
      <RegisteredInput name="Cost">
        <input type="number" min={0} />
      </RegisteredInput>
    </>
  );
}
