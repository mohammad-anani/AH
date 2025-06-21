import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import { useState } from "react";

type PhoneInputProps = {
  id?: string;
  name: string;
  initialValue?: string;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (phone: string) => void;
};

function PhoneInput({
  id = "",
  name,
  initialValue,
  format = "xx xxx xxx",
  onChange,
  placeholder,
  disabled = false,
}: PhoneInputProps) {
  const [phone, setPhone] = useState(
    formatPhoneNumber(initialValue ?? "", format) || "",
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "");
    const formatted = formatPhoneNumber(digits, format);
    setPhone(formatted);

    if (onChange) onChange(digits);
  }

  return (
    <input
      id={id}
      disabled={disabled}
      name={name}
      type="text"
      placeholder={placeholder}
      maxLength={format.length}
      value={phone}
      onChange={handleChange}
    />
  );
}

export default PhoneInput;
