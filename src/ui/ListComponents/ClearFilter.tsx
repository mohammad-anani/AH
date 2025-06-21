import { cloneElement } from "react";
import type { ClickableChildrenProps } from "../../utils/models/types";
import { useSearchParams } from "react-router-dom";

export default function ClearFilter({ children }: ClickableChildrenProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.size === 0) return null;

  return cloneElement(children, {
    onClick: () => {
      setSearchParams("");
    },
  });
}
