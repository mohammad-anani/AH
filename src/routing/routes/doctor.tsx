import DoctorProtectedRoute from "@/interfaces/doctor/DoctorProtectedRoute";
import Nav from "@/interfaces/doctor/Nav";
import DoctorHomepage from "@/interfaces/doctor/pages/Homepage";
import Layout from "@/ui/customComponents/Layout";
import Error from "@/ui/Error";
import { appointmentsRoutes } from "./doctor/appointments";
import { humanResourcesRoutes } from "./doctor/human-resources";
import { testsRoutes } from "./doctor/tests";
import { operationsRoutes } from "./doctor/operations";

export const doctorRoutes = [
  {
    path: "/doctor",
    errorElement: <Error />,
    Component: DoctorProtectedRoute,
    children: [
      {
        element: (
          <Layout>
            <Nav />
          </Layout>
        ),
        children: [
          { path: "", Component: DoctorHomepage },

          ...appointmentsRoutes,
          ...humanResourcesRoutes,
          ...testsRoutes,
          ...operationsRoutes,
        ],
      },
    ],
  },
];
