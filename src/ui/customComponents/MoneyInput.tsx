import { formatMoney } from "@/utils/formatters/formatMoneyPositions";
import { useState } from "react";

type MoneyInputProps = {
  id?: string;
  name: string;
  initialValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (rawValue: string) => void;
};

export default function MoneyInput({
  id = "",
  name,
  initialValue = "",
  placeholder,
  disabled = false,
  onChange,
}: MoneyInputProps) {
  const [value, setValue] = useState(() => formatMoney(initialValue));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value?.replace(/\D/g, "");
    const formatted = formatMoney(raw);
    setValue(formatted);

    if (onChange) onChange(raw);
  }

  return (
    <input
      id={id}
      name={name}
      type="text"
      inputMode="numeric"
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
