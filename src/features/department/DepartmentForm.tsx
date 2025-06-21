import Controller from "@/ui/customComponents/Controller";
import PhoneInput from "../../ui/customComponents/PhoneInput";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function DepartmentForm() {
  return (
    <>
      <label htmlFor="Name">Name:</label>
      <RegisteredInput name="Name">
        <input id="Name" type="text" placeholder="Department Name" />
      </RegisteredInput>

      <label htmlFor="phone">Phone:</label>
      <Controller
        name={`Phone`}
        renderField={({ field, isSubmitting }) => (
          <PhoneInput
            name={field.name}
            format="xx xxx xxx"
            disabled={isSubmitting}
            placeholder="Phone Number"
            initialValue={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </>
  );
}
