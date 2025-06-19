import useListContext from "../context";

interface NumberInputProps {
  fieldKey: string;
  label: string;
  value: string | number;
}

export default function NumberInput({
  fieldKey,
  label,
  value,
}: NumberInputProps) {
  const { setFilter } = useListContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <input
        type="number"
        name={fieldKey}
        defaultValue={Number(value) || ""}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, [fieldKey]: e.target.value }))
        }
      />
    </>
  );
}
