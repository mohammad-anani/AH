import NavLink from "@/ui/customComponents/NavLink";
import {
  House,
  Hospital,
  Users,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  CircleDollarSign,
  LogOut,
} from "lucide-react";

export default function Nav() {
  return (
    <>
      <NavLink to="/admin" end>
        <House />
        Home
      </NavLink>
      <NavLink to="departments">
        <Hospital /> Departments
      </NavLink>
      <NavLink to="human-resources">
        <Users /> HR
      </NavLink>
      <NavLink to="tests">
        <FlaskConical /> Tests
      </NavLink>
      <NavLink to="operations">
        <HeartPulse /> Operations
      </NavLink>
      <NavLink to="appointments">
        <Stethoscope /> Appointments
      </NavLink>
      <NavLink to="payments">
        <CircleDollarSign /> Payments
      </NavLink>
      <NavLink to="/">
        <LogOut /> Logout
      </NavLink>
    </>
  );
}
