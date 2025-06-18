import type { ChildrenProps } from "@/utils/types";
import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonProps = ChildrenProps & {
  as: "button" | "Link";
  variant: "primary" | "secondary" | "link" | "destructive";
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;

const buttonStyles =
  "place-content-center border-[1px] px-[20px] py-[7px] text-center text-xl active:opacity-60 active:transition-none! ";
const primaryStyles =
  "border-primary text-background!  bg-primary hover:bg-primary-light!  hover:text-primary!";
const secondaryStyles =
  "border-primary text-primary! bg-transparent!  hover:bg-background-darker!";
const destructiveStyles =
  " text-background! border-black bg-red-600 hover:bg-red-700";

export default function Clickable({
  as,
  variant,
  children,
  ...rest
}: ButtonProps) {
  const className =
    buttonStyles +
    " " +
    (variant === "primary"
      ? primaryStyles
      : variant === "secondary"
        ? secondaryStyles
        : destructiveStyles) +
    " " +
    rest.className;

  switch (as) {
    case "button":
      return (
        <button {...rest} className={className + " "}>
          {children}
        </button>
      );
    case "Link":
      return (
        <Link
          {...(rest as LinkProps)}
          className={
            variant !== "link"
              ? className
              : "text-primary! hover:text-primary-light! text-xl underline!"
          }
        >
          {children}
        </Link>
      );
  }
}
