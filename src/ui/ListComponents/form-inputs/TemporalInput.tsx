import useListContext from "../context";

interface TemporalInputProps {
  fieldKey: string;
  label: string;
  value: { from: string; to: string };
  type: "date" | "datetime" | "time";
}

export default function TemporalInput({
  fieldKey,
  label,
  value,
  type,
}: TemporalInputProps) {
  const { setFilter } = useListContext();

  return (
    <>
      <label htmlFor={fieldKey}>{label}</label>
      <div className="grid grid-cols-[50px_1fr] gap-y-1">
        <label htmlFor={fieldKey + "From"}>From:</label>
        <input
          type={type}
          name={fieldKey + "From"}
          defaultValue={value.from || ""}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              [fieldKey + "From"]: e.target.value,
            }))
          }
        />
        <label htmlFor={fieldKey + "To"}>To:</label>
        <input
          type={type}
          name={fieldKey + "To"}
          defaultValue={value.to || ""}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              [fieldKey + "To"]: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
}
