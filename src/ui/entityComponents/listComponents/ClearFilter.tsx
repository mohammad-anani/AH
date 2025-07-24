import { cloneElement } from "react";
import type { ClickableChildrenProps } from "../../../utils/models/types/util";
import { useSearchParams } from "react-router-dom";
import useListContext from "./context";

export default function ClearFilter({ children }: ClickableChildrenProps) {
  const { UrlState } = useListContext();

  const [state, setState] = UrlState ?? [new URLSearchParams(), null];

  const [searchParams, setSearchParams] = useSearchParams();

  if ((!UrlState && searchParams.size === 0) || (UrlState && state.size === 0))
    return null;

  return cloneElement(children, {
    onClick: () => {
      if (UrlState) setState?.(new URLSearchParams());
      else setSearchParams("");
    },
  });
}
