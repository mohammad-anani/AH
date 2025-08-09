import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
import CountrySelect from "./CountrySelect";

export const CountryFormSelectCallBack: customFormProps = [
  ({ field, onChange, isSubmitting }) => (
    <CountrySelect
      setCountryID={onChange as Setter<number>}
      countryID={field as number}
      isDisabled={isSubmitting}
    />
  ),
  "number",
];

export const CountryFilterSelectCallBack: customFilterProps = [
  ({ field, onChange }) => (
    <CountrySelect
      setCountryID={onChange as Setter<number>}
      countryID={field as number}
    />
  ),
  "number",
];

//to debug
