import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";
import BackNavigator from "./BackNavigator";
import type { ChildrenProps } from "@/utils/models/types/utils/basics";

type ButtonProps = ChildrenProps & {
  as: "button" | "Link" | "Back";
  variant: "primary" | "secondary" | "link" | "destructive";
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;

const baseStyles =
  "place-content-center border-[1px] px-[20px] py-[7px] text-center text-xl active:opacity-60 active:transition-none! disabled:opacity-50 disabled:pointer-events-none! disabled:cursor-not-allowed";

const variantStyles = {
  primary:
    "border-primary text-background! bg-primary hover:bg-primary-light! hover:text-primary! disabled:bg-muted disabled:text-foreground disabled:border-muted",
  secondary:
    "border-primary text-primary! bg-transparent hover:bg-background-darker! disabled:text-foreground disabled:border-muted disabled:bg-muted",
  destructive:
    "text-background! border-black bg-destructive hover:bg-destructive-light! disabled:bg-muted disabled:text-foreground disabled:border-muted mb-[4px]",
  link: "text-primary! hover:text-primary-light! text-xl underline! disabled:cursor-not-allowed! disabled:text-foreground! disabled:line-through! disabled:no-underline disabled:bg-transparent",
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
