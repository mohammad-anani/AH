import NavLink from "@/ui/customComponents/NavLink";
import {
  Hospital,
  Users,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  LogOut,
} from "lucide-react";

export default function Nav() {
  return (
    <>
      <NavLink to="departments">
        <Hospital /> Departments
      </NavLink>
      <NavLink to="human-resources">
        <Users /> HR
      </NavLink>
      <NavLink to="tests/types">
        <FlaskConical /> Test Types
      </NavLink>
      <NavLink to="operations">
        <HeartPulse /> Operations
      </NavLink>
      <NavLink to="appointments">
        <Stethoscope /> Appointments
      </NavLink>
      <NavLink to="tests/appointments">
        <Stethoscope />
        Test Appointments
      </NavLink>

      <NavLink to="/logout">
        <LogOut /> Logout
      </NavLink>
    </>
  );
}
