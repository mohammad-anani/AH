import { route } from "@/routing/entityRoute";
import { department } from "@/utils/models/componentsConfig/receptionist";

export const departmentsRoutes = route(
  "Department",
  false,
  false,
  false,
  department,
);
