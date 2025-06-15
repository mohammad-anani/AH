import useListContext from "./context";
import PhoneInput from "../PhoneInput";

export function Form() {
  const { fields, filter, setFilter } = useListContext();

  console.log(filter);

  return (
    <div className="grid max-h-[300px]! w-[250px] grid-cols-[1fr_1fr] gap-y-2 overflow-y-scroll rounded-none! pr-2 text-xs! *:w-full!">
      {fields.map((field) => {
        const value = filter[field[0]];
        const label =
          (field[0].endsWith("ID")
            ? field[0].substring(0, field[0].length - 2) + " ID"
            : field[0]) + ":";
        switch (field[1]) {
          case "number":
            return (
              <>
                <label key={field[0]} htmlFor={field[0]}>
                  {label}
                </label>
                <input
                  key={field[0]}
                  type="number"
                  name={field[0]}
                  defaultValue={Number(value) || null}
                  onChange={(e) => {
                    setFilter((filter) => ({
                      ...filter,
                      [field[0]]: e.target.value,
                    }));
                  }}
                />
              </>
            );
          case "string":
            return (
              <>
                <label key={field[0]} htmlFor={field[0]}>
                  {label}
                </label>
                <input
                  key={field[0]}
                  type="text"
                  name={field[0]}
                  defaultValue={value ? String(value) : ""}
                  onChange={(e) => {
                    setFilter((filter) => ({
                      ...filter,
                      [field[0]]: e.target.value,
                    }));
                  }}
                />
              </>
            );
          case "phone":
            return (
              <>
                <label key={field[0]} htmlFor={field[0]}>
                  {label}
                </label>
                <PhoneInput
                  key={field[0]}
                  name={field[0]}
                  format="xx xxx xxx"
                  initialValue={value || ""}
                  onChange={(phone) => {
                    setFilter((filter) => ({
                      ...filter,
                      [field[0]]: phone,
                    }));
                  }}
                />
              </>
            );
          case "boolean":
            return (
              <>
                <label key={field[0]} htmlFor={field[0]}>
                  {label}
                </label>
                <select
                  key={field[0]}
                  name={field[0]}
                  defaultValue={
                    value === null ? "all" : value === "true" ? "true" : "false"
                  }
                  onChange={(e) => {
                    setFilter((filter) => ({
                      ...filter,
                      [field[0]]: e.target.value,
                    }));
                  }}
                >
                  <option value="all">All</option>
                  <option value="true">{field[2]}</option>
                  <option value="false">{field[3]}</option>
                </select>
              </>
            );
          default:
            return (
              <>
                {" "}
                <label key={field[0]} htmlFor={field[0]}>
                  {label}
                </label>
                <>To be implemented</>
              </>
            );
        }
      })}
    </div>
  );
}
