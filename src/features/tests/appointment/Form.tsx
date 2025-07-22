import RegisteredInput from "@/ui/customComponents/RegisteredInput";

export default function Form() {
  return (
    <>
      <label>Scheduled Date</label>
      <RegisteredInput name="ScheduledDate">
        <input type="datetime-local" />
      </RegisteredInput>
    </>
  );
}
