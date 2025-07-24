import DepartmentSelect from "@/features/department/DepartmentSelect";
import Controller from "@/ui/customComponents/Controller";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import { SelectorInput } from "@/ui/entityComponents/listComponents/form-inputs";

export default function Form() {
  return (
    <>
      <label>Name:</label>
      <RegisteredInput name="Name">
        <input type="text" />
      </RegisteredInput>
      <label>Department:</label>
      <Controller
        name={`DepartmentID`}
        errorMessage="Department required."
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
      <label>Cost:</label>
      <RegisteredInput name="Cost">
        <input type="number" min={0} />
      </RegisteredInput>
      <SelectorInput label="Test Type" data="TestType" fieldKey="TestTypeID" />
    </>
  );
}
