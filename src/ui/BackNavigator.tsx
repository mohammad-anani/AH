import { cloneElement } from "react";
import type { ClickableChildrenProps } from "../utils/types";
import { useNavigate } from "react-router-dom";

export default function BackNavigator({
  children,
  pagesBack,
}: ClickableChildrenProps & {
  pagesBack: number;
}) {
  const navigate = useNavigate();

  return cloneElement(children, {
    onClick: (e) => {
      e.preventDefault();
      navigate(-pagesBack);
    },
  });
}
