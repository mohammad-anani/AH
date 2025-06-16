import useListContext from "./context";
import PhoneInput from "../PhoneInput";

export function Form() {
  const { fields, filter, setFilter } = useListContext();

  return (
    <div
      className={`grid max-h-[300px]! w-[260px] grid-cols-[1fr_1fr] gap-y-2 overflow-x-hidden ${
        fields.length > 10 ? "overflow-y-scroll" : ""
      } rounded-none! p-2 text-xs! *:w-full!`}
    >
      {fields.map((field) => {
        const [key, type, trueLabel, falseLabel] = field;
        const value = filter[key];
        const label = (() => {
          if (key === "CreatedAt") return "Created at:";
          if (/^Is[A-Z]/.test(key)) {
            // Turn IsActive → Is Active, IsDeleted → Is Deleted
            return (
              key.replace(/^Is/, "Is ").replace(/([a-z])([A-Z])/g, "$1 $2") +
              ":"
            );
          }
          if (key.endsWith("ID")) {
            return key.slice(0, -2) + " ID:";
          }
          // Default: split camelCase to spaced words
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
            return (
              <>
                <label key={key}>{label}</label>
                <input
                  key={key}
                  type="date"
                  name={key}
                  defaultValue={value || ""}
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                />
              </>
            );

          case "datetime":
            return (
              <>
                <label key={key}>{label}</label>
                <input
                  key={key}
                  type="datetime-local"
                  name={key}
                  defaultValue={value || ""}
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, [key]: e.target.value }))
                  }
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
