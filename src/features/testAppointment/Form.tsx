import { useFormContext } from "react-hook-form";
import type { TestAppointment } from "@/utils/models/types";
import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function Form() {
  useFormContext<TestAppointment>();

  return (
    <>
      <label>Scheduled Date</label>
      <RegisteredInput name="ScheduledDate">
        <input type="datetime-local" />
      </RegisteredInput>
    </>
  );
}
