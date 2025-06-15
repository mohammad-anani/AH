import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";
import NavLink from "@/ui/NavLink";
import {
  CircleDollarSign,
  FlaskConical,
  HeartPulse,
  Hospital,
  House,
  LogOut,
  Stethoscope,
  Users,
} from "lucide-react";

export default function Layout() {
  return (
    <>
      <Header>
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
        <NavLink to="finance">
          <CircleDollarSign /> Finance
        </NavLink>
        <NavLink to="/">
          <LogOut /> Logout
        </NavLink>
      </Header>

      <main className="h-auto! space-y-2 space-x-2 rounded-none! px-[10px] pt-[80px] pb-[20px]">
        <Outlet />
      </main>
    </>
  );
}
