import formatPhoneNumber from "@/utils/formatPhoneNumber";
import { useState } from "react";
import type { useFormContext } from "react-hook-form";

type PhoneInputProps = {
  id?: string;
  name: string;
  initialValue?: string;
  format?: string;
  placeholder?: string;
  register?: ReturnType<typeof useFormContext>["register"];
  onChange?: (phone: string) => void;
};

function PhoneInput({
  id = "",
  name,
  initialValue,
  format = "xx xxx xxx",
  onChange,
  placeholder,
  register,
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
      type="text"
      {...(register ? register(name) : { name })}
      placeholder={placeholder}
      maxLength={format.length}
      value={phone}
      onChange={handleChange}
    />
  );
}

export default PhoneInput;
