import Logo from "./Logo";
import type { ChildrenProps } from "@/utils/models/types/utils/basics";
import Nav from "./Nav";
import { NavLink, useLocation } from "react-router-dom";
import { useDecodedJwt } from "@/utils/hooks/useDecodedJwt";

export default function Header({ children }: ChildrenProps) {
  const { decoded } = useDecodedJwt();

  const url = useLocation().pathname;

  console.log(url);
  const role = decoded?.role;

  return (
    <header className="shadow-black-200 fixed top-0 right-0 left-0 z-1 grid h-[72px] grid-cols-[auto_1fr] items-center rounded-none! bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.15)]">
      <NavLink
        to={
          role === "Admin"
            ? "/admin"
            : role === "Receptionist"
              ? "/receptionist"
              : role === "Doctor"
                ? "/doctor"
                : "/"
        }
        className={({ isActive }) =>
          isActive && url.split("/").length === 2
            ? "**:text-primary-light!"
            : ""
        }
      >
        <Logo className="hover:text-primary-light! active:text-primary-light/50!" />
      </NavLink>
      <Nav>{children}</Nav>
    </header>
  );
}
