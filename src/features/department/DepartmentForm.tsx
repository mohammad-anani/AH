import PhoneInput from "../../ui/customComponents/PhoneInput";
import { Controller, useFormContext } from "react-hook-form";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function DepartmentForm() {
  const { control } = useFormContext();
  return (
    <>
      <label htmlFor="Name">Name:</label>
      <RegisteredInput name="Name">
        <input id="Name" type="text" placeholder="Department Name" />
      </RegisteredInput>

      <label htmlFor="phone">Phone:</label>
      <Controller
        name="Phone"
        control={control}
        render={({ field }) => (
          <PhoneInput
            name={field.name}
            format="xx xxx xxx"
            placeholder="Phone Number"
            initialValue={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </>
  );
}
