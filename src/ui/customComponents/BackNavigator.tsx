import type { ClickableChildrenProps } from "@/utils/models/types/util";
import { cloneElement } from "react";

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
