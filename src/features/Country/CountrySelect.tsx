import type { Country } from "@/utils/models/types/types";
import type { Setter } from "@/utils/models/types/util";
import Select from "react-select";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function CountrySelect({
  countryID,
  setCountryID,
  isDisabled = false,
}: {
  countryID: number;
  setCountryID: Setter<number>;
  isDisabled?: boolean;
}) {
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load("/countries");
  }, []);

  const countries: Country[] = fetcher.data?.[0] ?? [];

  // Convert to react-select format: { value: ID, label: Name }
  const options = countries.map((country) => ({
    value: country.ID,
    label: country.Name,
  }));

  const selectedOption = options.find((opt) => opt.value === countryID) ?? null;

  const selectStyles = {
    control: (base: Record<string, unknown>) => ({
      ...base,
      fontSize: "inherit",
      minHeight: "auto", // remove fixed height
      height: "100%", // fill available height
    }),
    valueContainer: (base: Record<string, unknown>) => ({
      ...base,
      padding: "0 6px",
    }),
    input: (base: Record<string, unknown>) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    indicatorsContainer: (base: Record<string, unknown>) => ({
      ...base,
      height: "100%", // fill height here too
    }),
    dropdownIndicator: (base: Record<string, unknown>) => ({
      ...base,
      padding: 2,
      svg: {
        width: 12,
        height: 12,
      },
    }),
    clearIndicator: (base: Record<string, unknown>) => ({
      ...base,
      padding: 2,
      svg: {
        width: 12,
        height: 12,
      },
    }),
    menu: (base: Record<string, unknown>) => ({
      ...base,
      fontSize: 10,
    }),
    option: (base: Record<string, unknown>) => ({
      ...base,
      fontSize: 10,
      padding: "4px 8px",
    }),
  };

  return (
    <Select
      styles={selectStyles}
      options={options}
      value={selectedOption}
      onChange={(selected) => {
        if (selected) setCountryID(selected.value);
      }}
      isDisabled={isDisabled}
      placeholder="Select a Country"
    />
  );
}
