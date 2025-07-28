import type { customFormProps, Setter } from "@/utils/models/types/util";
import CountrySelect from "./CountrySelect";

export const CountrySelectCallBack: customFormProps = [
  ({ field, onChange, isSubmitting }) => (
    <CountrySelect
      setCountryID={onChange as Setter<number>}
      countryID={field as number}
      isDisabled={isSubmitting}
    />
  ),
  "number",
];
