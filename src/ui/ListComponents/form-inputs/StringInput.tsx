import useListContext from "../context";

interface StringInputProps {
  fieldKey: string;
  label: string;
  value: string;
}

export default function StringInput({
  fieldKey,
  label,
  value,
}: StringInputProps) {
  const { setFilter } = useListContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <input
        type="text"
        name={fieldKey}
        defaultValue={value || ""}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, [fieldKey]: e.target.value }))
        }
      />
    </>
  );
}
