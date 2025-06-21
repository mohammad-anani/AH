import { cloneElement, isValidElement } from "react";
import { useFormContext } from "react-hook-form";

interface RegisteredInputProps {
  name: string;
  children: React.ReactElement;
}

export default function RegisteredInput({
  name,
  children,
}: RegisteredInputProps) {
  const { register } = useFormContext();

  if (!isValidElement(children)) {
    console.error("RegisteredInput expects a valid React element as child.");
    return null;
  }

  return cloneElement(children, {
    ...register(name),
  });
}
