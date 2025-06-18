import useListContext from "./context";
import PhoneInput from "../PhoneInput";
import Select from "react-select";

export function Form() {
  const { fields, filter, setFilter } = useListContext();
  const temporals = "date#datetime#time";
  const selectOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  return (
    <div
      className={`grid max-h-[300px]! w-[300px] grid-cols-[1fr_1fr] gap-y-3 overflow-x-hidden ${
        fields.length > 10 ? "overflow-y-scroll" : ""
      } rounded-none! p-2 text-xs! *:w-full!`}
    >
      {fields.map((field) => {
        const [key, type, trueLabel, falseLabel] = field;

        const value = temporals.includes(type)
          ? { from: filter[key + "From"], to: filter[key + "to"] }
          : filter[key];
        const label = (() => {
          return key.replace(/([a-z])([A-Z])/g, "$1 $2") + ":";
        })();

        switch (type) {
          case "number":
            return (
              <>
                <label key={key}>{label}</label>
                <input
                  key={key}
                  type="number"
                  name={key}
                  defaultValue={Number(value) || ""}
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                />
              </>
            );

          case "string":
            return (
              <>
                <label key={key}>{label}</label>
                <input
                  key={key}
                  type="text"
                  name={key}
                  defaultValue={value || ""}
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                />
              </>
            );

          case "phone":
            return (
              <>
                <label key={key}>{label}</label>
                <PhoneInput
                  key={key}
                  name={key}
                  format="xx xxx xxx"
                  initialValue={value || ""}
                  onChange={(phone) =>
                    setFilter((prev) => ({ ...prev, [key]: phone }))
                  }
                />
              </>
            );

          case "boolean":
            return (
              <>
                <label key={key}>{label}</label>
                <select
                  key={key}
                  name={key}
                  defaultValue={
                    value === undefined || value === null
                      ? "all"
                      : value === "true"
                        ? "true"
                        : "false"
                  }
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                >
                  <option value="all">All</option>
                  <option value="true">{trueLabel || "True"}</option>
                  <option value="false">{falseLabel || "False"}</option>
                </select>
              </>
            );

          case "date":
          case "datetime":
          case "time":
            return (
              <>
                <label key={key}>{label}</label>
                <div className="grid grid-cols-[50px_1fr] gap-y-1">
                  <label htmlFor={key + "From"}>From:</label>
                  <input
                    key={key + "From"}
                    type={type}
                    name={key + "From"}
                    defaultValue={value.from || ""}
                    onChange={(e) =>
                      setFilter((prev) => ({
                        ...prev,
                        [key + "From"]: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor={key + "To"}>To:</label>
                  <input
                    key={key + "To"}
                    type={type}
                    name={key + "To"}
                    defaultValue={value.to || ""}
                    onChange={(e) =>
                      setFilter((prev) => ({
                        ...prev,
                        [key + "To"]: e.target.value,
                      }))
                    }
                  />
                </div>
              </>
            );
          case "array":
            return (
              <>
                <label key={key}>{label}</label>
                <Select
                  isMulti
                  name={key}
                  defaultValue={
                    value ? value.map((v) => ({ value: v, label: v })) : []
                  }
                  onChange={(options) => {
                    setFilter((prev) => ({
                      ...prev,
                      [key]: options,
                    }));
                  }}
                  options={selectOptions}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: 10,
                      minHeight: 24,
                      minheight: 24,
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      padding: "0 6px",
                    }),
                    input: (base) => ({
                      ...base,
                      margin: 0,
                      padding: 0,
                    }),
                    indicatorsContainer: (base) => ({
                      ...base,
                      height: 24,
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      padding: 2,
                      svg: {
                        width: 12,
                        height: 12,
                      },
                    }),
                    clearIndicator: (base) => ({
                      ...base,
                      padding: 2,
                      svg: {
                        width: 12,
                        height: 12,
                      },
                    }),
                    menu: (base) => ({
                      ...base,
                      fontSize: 10,
                    }),
                    option: (base) => ({
                      ...base,
                      fontSize: 10,
                      padding: "4px 8px",
                    }),
                  }}
                />
              </>
            );
          default:
            return (
              <>
                <label key={key}>{label}</label>
                <span>Unsupported field</span>
              </>
            );
        }
      })}
    </div>
  );
}
