import useListContext from "./context";

export default function Sort() {
  const { fields, sort, setSort } = useListContext();
  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <select
        className="w-80"
        name="sort"
        id="sort"
        defaultValue={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="None">None</option>
        {fields.map((field) => (
          <option key={field[0]} value={field[0]}>
            {field[0]}
          </option>
        ))}
      </select>
    </>
  );
}
