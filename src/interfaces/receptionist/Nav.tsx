import NavLink from "@/ui/customComponents/NavLink";
import {
  FlaskConical,
  HeartPulse,
  Stethoscope,
  LogOut,
  UserRound,
} from "lucide-react";

export default function Nav() {
  return (
    <>
      <NavLink to="human-resources/patients">
        <UserRound /> Patients
      </NavLink>
      <NavLink to="appointments">
        <Stethoscope /> Appointments
      </NavLink>
      <NavLink to="operations">
        <HeartPulse /> Operations
      </NavLink>
      <NavLink classes="w-[150px]!" to="tests/appointments">
        <FlaskConical /> Test Appointments
      </NavLink>
      <NavLink to="/logout">
        <LogOut /> Logout
      </NavLink>
    </>
  );
}
