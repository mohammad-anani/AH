import { cloneElement } from "react";
import type { ClickableChildrenProps } from "../../../utils/models/types/util";
import { useSearchParams } from "react-router-dom";
import useListContext from "./context";

export default function ClearFilter({ children }: ClickableChildrenProps) {
  const { searchParamsState, canModifyUrl } = useListContext();

  const [state, setState] = searchParamsState ?? [new URLSearchParams(), null];
  const [searchParams, setSearchParams] = useSearchParams();

  const hasStateParams = state && Array.from(state.entries()).length > 0;
  const hasUrlParams = Array.from(searchParams.entries()).length > 0;

  const showButton =
    (searchParamsState && hasStateParams) ||
    (!searchParamsState && hasUrlParams && canModifyUrl);

  if (!showButton) return null;

  return cloneElement(children, {
    onClick: () => {
      if (searchParamsState) setState?.(new URLSearchParams());
      else setSearchParams("");
    },
  });
}
