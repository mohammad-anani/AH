import NavPage from "@/features/human-resources/NavPage";
import { patientsRoutes } from "./human-resources/routes/patients";
import { doctorsRoutes } from "./human-resources/routes/doctors";
import { adminsRoutes } from "./human-resources/routes/admins";
import { receptionistsRoutes } from "./human-resources/routes/receptionists";

export const humanResourcesRoutes = [
  {
    path: "human-resources",
    children: [
      { path: "", Component: NavPage },
      ...patientsRoutes,
      ...doctorsRoutes,
      ...adminsRoutes,
      ...receptionistsRoutes,
    ],
  },
];
