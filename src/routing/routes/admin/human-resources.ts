import HumanResources from "@/interfaces/admin/pages/HumanResources";
import { patientsRoutes } from "./human-resources/patients";
import { doctorsRoutes } from "./human-resources/doctors";
import { adminsRoutes } from "./human-resources/admins";
import { receptionistsRoutes } from "./human-resources/receptionists";

export const humanResourcesRoutes = [
  {
    path: "human-resources",
    children: [
      { path: "", Component: HumanResources },
      ...patientsRoutes,
      ...doctorsRoutes,
      ...adminsRoutes,
      ...receptionistsRoutes,
    ],
  },
];
