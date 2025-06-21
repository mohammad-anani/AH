import PersonForm from "../person/PersonForm";
import Select from "react-select";
import RegisteredInput from "../../ui/customComponents/RegisteredInput";
import { Controller, useFormContext } from "react-hook-form";

export default function EmployeeForm({
  fieldPrefix = "",
}: {
  fieldPrefix?: string;
}) {
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

  const { control } = useFormContext();

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

      <label htmlFor="leaveDate">Leave Date:</label>
      <RegisteredInput name={`${prefix}LeaveDate`}>
        <input type="date" />
      </RegisteredInput>

      <label htmlFor="isActive">Status:</label>
      <RegisteredInput name={`${prefix}isActive`}>
        <select>
          <option value="">Select Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </RegisteredInput>

      <label htmlFor="workingDays">Working Days:</label>
      <Controller
        name={`${prefix}WorkingDays`}
        control={control}
        render={({ field }) => (
          <Select
            isMulti
            options={selectOptions}
            value={selectOptions.filter((option) =>
              field.value?.includes(option.value),
            )}
            onChange={(selected) =>
              field.onChange(selected.map((opt) => opt.value))
            }
          />
        )}
      />

      <label htmlFor="shiftStart">Shift Start:</label>
      <RegisteredInput name={`${prefix}ShiftStart`}>
        <input type="time" />
      </RegisteredInput>

      <label htmlFor="shiftEnd">Shift End:</label>
      <RegisteredInput name={`${prefix}ShiftEnd`}>
        <input type="time" />
      </RegisteredInput>
    </>
  );
}
