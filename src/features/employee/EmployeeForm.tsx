import PersonForm from "../person/PersonForm";
import Select from "react-select";
import RegisteredInput from "../../ui/customComponents/RegisteredInput";
import Controller from "@/ui/customComponents/Controller";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import type { Department } from "@/utils/models/types";

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

  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load("/admin/departments/list");
  }, []);

  const departments: Department[] = fetcher.data?.[0] ?? [];

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
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </RegisteredInput>

      <label htmlFor="DepartmentID">Department:</label>
      <RegisteredInput name={`${prefix}DepartmentID`}>
        <select>
          <option value="">Select Department</option>
          {departments?.map((department) => (
            <option key={department.ID} value={department.ID}>
              {department.Name}
            </option>
          ))}
        </select>
      </RegisteredInput>

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
                field.value?.includes(option.value),
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
        <input type="time" />
      </RegisteredInput>

      <label htmlFor="shiftEnd">Shift End:</label>
      <RegisteredInput name={`${prefix}ShiftEnd`}>
        <input type="time" />
      </RegisteredInput>
    </>
  );
}
