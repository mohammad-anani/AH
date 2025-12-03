import {
  ArrayInput,
  BooleanInput,
  EmailInput,
  MoneyInput,
  NumberInput,
  PasswordInput,
  PhoneInput,
  SelectInput,
  SelectorInput,
  StringInput,
  TemporalInput,
  TextareaInput,
} from "../../ui/form-inputs";

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

  password: PasswordInput,
} as const;
