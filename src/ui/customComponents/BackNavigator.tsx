import type { ClickableChildrenProps } from "@/utils/models/types/utils/basics";
import { cloneElement } from "react";

import { useNavigate } from "react-router-dom";

type BackNavigatorType = ClickableChildrenProps & {
  pagesBack: number;
};

export default function BackNavigator({
  children,
  pagesBack,
}: BackNavigatorType) {
  const navigate = useNavigate();

  if (pagesBack <= 0 || !Number.isInteger(pagesBack)) return null;

  function handelClick(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault();
    navigate(-pagesBack);
  }

  return cloneElement(children, {
    onClick: handelClick,
  });
}
