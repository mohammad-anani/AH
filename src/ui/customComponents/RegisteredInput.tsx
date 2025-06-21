import { cloneElement } from "react";
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

  return cloneElement(children, {
    ...register(name),
  });
}
