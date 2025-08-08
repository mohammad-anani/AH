import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
import CountrySelect from "./CountrySelect";

export const CountryFormSelectCallBack: customFormProps = [
  ({ field, onChange, isSubmitting }) => {
    return (
      <CountrySelect
        setCountry={onChange as Setter<{ ID: number; Name?: string }>}
        country={field as { ID: number; Name?: string }}
        isDisabled={isSubmitting}
      />
    );
  },
  "object",
];

export const CountryFilterSelectCallBack: customFilterProps = [
  ({ field, onChange }) => (
    <CountrySelect
      setCountry={onChange as Setter<{ ID: number; Name?: string }>}
      country={field as { ID: number; Name?: string }}
    />
  ),
  "object",
];

//to debug
