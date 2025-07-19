import PersonForm from "../person/Form";
import Select from "react-select";
import RegisteredInput from "../../../ui/customComponents/RegisteredInput";
import Controller from "@/ui/customComponents/Controller";
import DepartmentSelect from "@/features/department/DepartmentSelect";

export default function Form({ fieldPrefix = "" }: { fieldPrefix?: string }) {
  const prefix = fieldPrefix + "Employee.";
  const selectOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  return (
    <>
      <PersonForm fieldPrefix={prefix} />

      <label htmlFor="salary">Salary:</label>
      <RegisteredInput name={`${prefix}Salary`}>
        <input type="number" placeholder="Salary" />
      </RegisteredInput>

      <label htmlFor="hireDate">Hire Date:</label>
      <RegisteredInput name={`${prefix}HireDate`}>
        <input type="date" />
      </RegisteredInput>

      <label htmlFor="isActive">Status:</label>
      <RegisteredInput name={`${prefix}isActive`}>
        <select>
          <option value="">Select Status</option>
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>
      </RegisteredInput>

      <label htmlFor="DepartmentID">Department:</label>
      <Controller
        errorMessage="Department required."
        name={`${prefix}DepartmentID`}
        renderField={({ field, isSubmitting }) => {
          return (
            <DepartmentSelect
              isDisabled={isSubmitting}
              departmentID={field.value}
              setDepartmentID={field.onChange}
            />
          );
        }}
      />

      <label htmlFor="workingDays">Working Days:</label>
      <Controller
        name={`${prefix}WorkingDays`}
        renderField={({ field, isSubmitting }) => {
          return (
            <Select
              isMulti
              isDisabled={isSubmitting}
              options={selectOptions}
              value={selectOptions.filter((option) =>
                field.value?.includes(option.value.substring(0, 3)),
              )}
              onChange={(selected) =>
                field.onChange(selected.map((opt) => opt.value))
              }
            />
          );
        }}
      />

      <label htmlFor="shiftStart">Shift Start:</label>
      <RegisteredInput name={`${prefix}ShiftStart`}>
        <input type="time" step={60} />
      </RegisteredInput>

      <label htmlFor="shiftEnd">Shift End:</label>
      <RegisteredInput name={`${prefix}ShiftEnd`}>
        <input type="time" step={60} />
      </RegisteredInput>
    </>
  );
}
