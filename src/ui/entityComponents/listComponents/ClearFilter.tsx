import { cloneElement } from "react";
import type { ClickableChildrenProps } from "../../../utils/models/types/util";
import { useSearchParams } from "react-router-dom";
import useListContext from "./context";

export default function ClearFilter({ children }: ClickableChildrenProps) {
  const { searchParamsState } = useListContext();

  const [state, setState] = searchParamsState ?? [new URLSearchParams(), null];

  const [searchParams, setSearchParams] = useSearchParams();

  if ((searchParamsState ? state?.size : searchParams.size) === 0) return null;

  return cloneElement(children, {
    onClick: () => {
      if (searchParamsState) setState?.(new URLSearchParams());
      else setSearchParams("");
    },
  });
}
