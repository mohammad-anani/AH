import { Controller, useFormContext } from "react-hook-form";

export default function Order() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="order"
      render={({ field }) => (
        <svg
          onClick={() => {
            if (field.value === "asc") field.onChange("desc");
            else field.onChange("asc");
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-down-az lucide-arrow-down-a-z h-[25px] w-[25px] translate-x-[6px] cursor-pointer"
          aria-hidden="true"
        >
          <g
            className={`origin-[7px_12px] translate-x-[1px] transform text-right transition-transform duration-300! ${
              field.value === "desc" ? "rotate-180" : ""
            }`}
          >
            <path d="m3 16 4 4 4-4"></path>
            <path d="M7 20V4"></path>
          </g>
          <path d="M20 8h-5"></path>
          <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"></path>
          <path d="M15 14h5l-5 6h5"></path>
        </svg>
      )}
    ></Controller>
  );
}
