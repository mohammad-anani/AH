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

  return cloneElement(children, {
    onClick: (e) => {
      e.preventDefault();
      navigate(-pagesBack);
    },
  });
}
