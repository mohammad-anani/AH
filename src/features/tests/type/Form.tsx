import DepartmentSelect from "@/features/department/DepartmentSelect";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import Controller from "@/ui/customComponents/Controller";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import EntityForm from "@/ui/entityComponents/Form";
import { SelectorInput } from "@/ui/form-inputs";

export default function Form() {
  return (
    <EntityForm
      entity="TestType"
      fields={[
        ["Name", "Name", "string", "both"],
        [
          "Department",
          "DepartmentID",
          "custom",
          "add",
          DepartmentSelectCallBack,
        ],
        ["Cost", "Cost", "money", "both"],
      ]}
      mode="add"
    />
  );

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
