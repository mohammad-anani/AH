import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";
import BackNavigator from "./BackNavigator";
import type { ChildrenProps } from "@/utils/models/types/util";

type ButtonProps = ChildrenProps & {
  as: "button" | "Link" | "Back";
  variant: "primary" | "secondary" | "link" | "destructive";
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;

const baseStyles =
  "place-content-center border-[1px] px-[20px] py-[7px] text-center text-xl active:opacity-60 active:transition-none!";

const variantStyles = {
  primary:
    "border-primary text-background! bg-primary hover:bg-primary-light! hover:text-primary!",
  secondary:
    "border-primary text-primary! bg-transparent hover:bg-background-darker!",
  destructive:
    "text-background! border-black bg-destructive hover:bg-destructive-light!",
  link: "text-primary! hover:text-primary-light! text-xl underline!",
};

export default function Clickable({
  as,
  variant,
  children,
  className,
  ...rest
}: ButtonProps) {
  const getButtonClassName = () => {
    if (variant === "link") {
      return cn(variantStyles.link, className);
    }

    return cn(baseStyles, variantStyles[variant], className);
  };

  const buttonClassName = getButtonClassName();

  switch (as) {
    case "button":
      return (
        <button {...rest} className={buttonClassName}>
          {children}
        </button>
      );
    case "Link":
      return (
        <Link {...(rest as LinkProps)} className={buttonClassName}>
          {children}
        </Link>
      );
    case "Back":
      return (
        <BackNavigator pagesBack={1}>
          <button {...rest} className={buttonClassName}>
            {children}
          </button>
        </BackNavigator>
      );
  }
}
