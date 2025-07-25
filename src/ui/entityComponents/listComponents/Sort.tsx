import { useForm } from "react-hook-form";
import useListContext from "./context";
import { generateLabel } from "./utils";

export default function Sort() {
  const { fields } = useListContext();
  const safeFields = Array.isArray(fields) ? fields : [];

  const { register } = useForm();

  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <select className="w-80" id="sort" {...register("sort")}>
        <option value="None">None</option>
        {safeFields.map(([value]) => (
          <option key={value} value={value}>
            {generateLabel(value)}
          </option>
        ))}
      </select>
    </>
  );
}
