import type { ChildrenProps } from "@/utils/models/types/utils/basics";
import {
  NavLink as NLink,
  type NavLinkProps as NavProps,
} from "react-router-dom";

type NavLinkProps = ChildrenProps & { to: string; classes?: string } & NavProps;

export default function NavLink({
  children,
  to,
  classes,
  ...props
}: NavLinkProps) {
  return (
    <div className={"w-[110px] " + classes}>
      <NLink
        to={to}
        {...props}
        className={({ isActive }) => {
          return `hover:text-primary-light! hover:**:text-primary-light! ${isActive ? "text-primary-light! **:text-primary-light! underline!" : "text-background! **:text-background!"} flex! gap-x-1 text-[15px] *:h-[20px]! *:w-[20px]!`;
        }}
      >
        {children}
      </NLink>
    </div>
  );
}
