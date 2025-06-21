/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, type ReactElement } from "react";

export default function SearchButton({
  children,
}: {
  children: ReactElement<any, any>;
}) {
  return cloneElement(children, { type: "submit" });
}
