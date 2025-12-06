import Nav from "@/interfaces/receptionist/Nav";
import ReceptionistHomepage from "@/interfaces/receptionist/pages/Homepage";
import ReceptionistProtectedRoute from "@/interfaces/receptionist/ReceptionistProtectedRoute";
import Layout from "@/ui/customComponents/Layout";
import Error from "@/ui/Error";
import { appointmentsRoutes } from "./receptionist/appointments";
import { departmentsRoutes } from "./receptionist/departments";
import { humanResourcesRoutes } from "./receptionist/human-resources";
import { insuranceRoute } from "./receptionist/insurances";
import { operationsRoutes } from "./receptionist/operations";
import { paymentRoute } from "./receptionist/payments";
import { prescriptionRoute } from "./receptionist/prescriptions";
import { testsRoutes } from "./receptionist/tests";

export const receptionistRoutes = [
  {
    path: "/receptionist",
    errorElement: <Error />,
    Component: ReceptionistProtectedRoute,
    children: [
      {
        element: (
          <Layout>
            <Nav />
          </Layout>
        ),
        children: [
          { path: "", Component: ReceptionistHomepage },
          ...insuranceRoute,
          ...appointmentsRoutes,
          ...humanResourcesRoutes,
          ...testsRoutes,
          ...operationsRoutes,
          ...departmentsRoutes,
          ...paymentRoute,
          ...prescriptionRoute
        ],
      },
    ],
  },
];
