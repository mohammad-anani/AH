import useListContext from "../context";
import PhoneInputComponent from "../../PhoneInput";

interface PhoneInputProps {
  fieldKey: string;
  label: string;
  value: string;
}

export default function PhoneInput({
  fieldKey,
  label,
  value,
}: PhoneInputProps) {
  const { setFilter } = useListContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <PhoneInputComponent
        name={fieldKey}
        format="xx xxx xxx"
        initialValue={value || ""}
        onChange={(phone) =>
          setFilter((prev) => ({ ...prev, [fieldKey]: phone }))
        }
      />
    </>
  );
}
