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
        <select>
          <option value={lowercaseFirstLetter(none ?? "None")}>
            {none ?? "None"}
          </option>
          <option value={"true"}>{trueLabel ?? "true"}</option>
          <option value={falseLabel}>{falseLabel ?? "true"}</option>
        </select>
      </RegisteredInput>
    </>
  );
}

//for forms,all becomes none

function lowercaseFirstLetter(word: string): string {
  if (!word) return "";
  return word.charAt(0).toLowerCase() + word.slice(1);
}
