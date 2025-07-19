import Logo from "./Logo";
import type { ChildrenProps } from "@/utils/models/types/util";
import Nav from "./Nav";

export default function Header({ children }: ChildrenProps) {
  return (
    <header className="shadow-black-200 fixed top-0 right-0 left-0 z-1 grid h-[72px] grid-cols-[auto_1fr] items-center rounded-none! bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.15)]">
      <Logo />
      <Nav>{children}</Nav>
    </header>
  );
}
