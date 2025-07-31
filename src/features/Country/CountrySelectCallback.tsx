import type { customFormProps } from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
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
