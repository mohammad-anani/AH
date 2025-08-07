import NavLink from "@/ui/customComponents/NavLink";
import { HeartPulse, Stethoscope, LogOut } from "lucide-react";

export default function Nav() {
  return (
    <>
      <NavLink to="appointments">
        <Stethoscope /> Appointments
      </NavLink>

      <NavLink to="operations">
        <HeartPulse /> Operations
      </NavLink>

      <NavLink to="/">
        <LogOut /> Logout
      </NavLink>
    </>
  );
}
