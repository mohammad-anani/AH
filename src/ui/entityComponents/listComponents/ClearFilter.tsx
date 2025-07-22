import { cloneElement } from "react";
import type {
  ClickableChildrenProps,
  Setter,
} from "../../../utils/models/types/util";
import { useSearchParams } from "react-router-dom";
import useListContext from "./context";

export default function ClearFilter({ children }: ClickableChildrenProps) {
  const { UrlState } = useListContext();

  const [state, setState] = UrlState ?? [new URLSearchParams(), null];

  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.size === 0 && state.size === 0) return null;

  return cloneElement(children, {
    onClick: () => {
      setSearchParams("");

      setState?.(new URLSearchParams());
    },
  });
}
