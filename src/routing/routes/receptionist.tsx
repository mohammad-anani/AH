import Nav from "@/interfaces/receptionist/Nav";
import ReceptionistHomepage from "@/interfaces/receptionist/pages/Homepage";
import ReceptionistProtectedRoute from "@/interfaces/receptionist/ReceptionistProtectedRoute";
import Layout from "@/ui/customComponents/Layout";
import Error from "@/ui/Error";
import { insuranceRoute } from "./receptionist/insurances";
import { appointmentsRoutes } from "./receptionist/appointments";
import { operationsRoutes } from "./receptionist/operations";
import { departmentsRoutes } from "./receptionist/departments";
import { billRoute } from "./receptionist/bills";
import { paymentRoute } from "./receptionist/payments";
import { humanResourcesRoutes } from "./receptionist/human-resources";
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
          ...billRoute,
          ...paymentRoute,
        ],
      },
    ],
  },
];
