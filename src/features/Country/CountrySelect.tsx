import type { Country } from "@/utils/models/types/types";
import type { Setter } from "@/utils/models/types/util";
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
    fetcher.load("/countries/list");
  }, []);

  const countries: Country[] = fetcher.data?.[0] ?? [];

  return (
    <select
      disabled={isDisabled}
      value={countryID || ""}
      onChange={(e) => {
        setCountryID(+e.target.value);
      }}
    >
      <option value={undefined}>Select Country</option>
      {countries?.map((country) => (
        <option key={country.ID} value={country.ID}>
          {country.Name}
        </option>
      ))}
    </select>
  );
}
