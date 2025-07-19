import { cloneElement, type ReactElement } from "react";

export default function SearchButton({
  children,
}: {
  children: ReactElement<{ type: string }, "button">;
}) {
  return cloneElement(children, { type: "submit" });
}
