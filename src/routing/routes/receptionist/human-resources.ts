import InvalidPath from "@/ui/InvalidPath";
import { patientRoutes } from "./hr/patients.tsx";
import { doctorsRoutes } from "./hr/doctors";

export const humanResourcesRoutes = [
  {
    path: "human-resources",
    children: [
      { path: "", Component: InvalidPath },
      ...patientRoutes,
      ...doctorsRoutes,
    ],
  },
];
