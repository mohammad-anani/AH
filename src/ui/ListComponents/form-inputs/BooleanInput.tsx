import useListContext from "../context";

interface BooleanInputProps {
  fieldKey: string;
  label: string;
  value: string | boolean;
  trueLabel?: string;
  falseLabel?: string;
}

export default function BooleanInput({
  fieldKey,
  label,
  value,
  trueLabel = "True",
  falseLabel = "False",
}: BooleanInputProps) {
  const { setFilter } = useListContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <select
        name={fieldKey}
        defaultValue={
          value === undefined || value === null
            ? "all"
            : value === "true"
              ? "true"
              : "false"
        }
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, [fieldKey]: e.target.value }))
        }
      >
        <option value="all">All</option>
        <option value="true">{trueLabel}</option>
        <option value="false">{falseLabel}</option>
      </select>
    </>
  );
}
