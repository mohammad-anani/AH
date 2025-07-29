import RegisteredInput from "@/ui/customComponents/RegisteredInput";

interface BooleanInputProps {
  fieldKey: string;
  label: string;
  data: [true: string, false: string, none?: string];
}

export default function BooleanInput({
  fieldKey,
  label,
  data,
}: BooleanInputProps) {
  const [trueLabel, falseLabel, none] = data;

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <RegisteredInput name={fieldKey}>
        <select
          onChange={(e) =>
            e.target.value === undefined ? undefined : e.target.value === "true"
          }
        >
          <option value={undefined}>{none ?? "None"}</option>
          <option value={"true"}>{trueLabel ?? "true"}</option>
          <option value={"false"}>{falseLabel ?? "true"}</option>
        </select>
      </RegisteredInput>
    </>
  );
}
