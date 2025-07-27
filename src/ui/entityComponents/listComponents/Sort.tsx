import RegisteredInput from "@/ui/customComponents/RegisteredInput";
import useListContext from "./context";
import { generateLabel } from "./utils";

export default function Sort() {
  const { fields } = useListContext();
  const safeFields = Array.isArray(fields) ? fields : [];

  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <RegisteredInput name="sort">
        <select className="w-80">
          <option value="None">None</option>
          {safeFields.map(([value]) => (
            <option key={value} value={value}>
              {generateLabel(value)}
            </option>
          ))}
        </select>
      </RegisteredInput>
    </>
  );
}
