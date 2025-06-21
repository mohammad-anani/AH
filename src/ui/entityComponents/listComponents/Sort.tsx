import { useFormContext, Controller } from "react-hook-form";
import useListContext from "./context";
import { generateLabel } from "./utils";

export default function Sort() {
  const { control } = useFormContext();
  const { fields } = useListContext();

  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <Controller
        control={control}
        name="sort"
        render={({ field }) => (
          <select
            className="w-80"
            id="sort"
            value={field.value}
            onChange={field.onChange}
          >
            <option value="None">None</option>
            {fields.map((fieldItem) => (
              <option key={fieldItem[0]} value={fieldItem[0]}>
                {generateLabel(fieldItem[0])}
              </option>
            ))}
          </select>
        )}
      />
    </>
  );
}
