import MoneyInput from "@/ui/form-inputs/MoneyInput";
import {
  NumberInput,
  StringInput,
  PhoneInput,
  ArrayInput,
  SelectInput,
  EmailInput,
  SelectorInput,
  BooleanInput,
  TemporalInput,
} from "../../ui/form-inputs";
import TextareaInput from "@/ui/form-inputs/textareaInput";

export const inputMap = {
  number: NumberInput,
  string: StringInput,
  phone: PhoneInput,
  multiselect: ArrayInput,
  money: MoneyInput,
  uniselect: SelectInput,
  email: EmailInput,
  selector: SelectorInput,
  boolean: BooleanInput,
  date: TemporalInput,
  datetime: TemporalInput,
  time: TemporalInput,
  text: TextareaInput,
} as const;
