import Nav from "@/interfaces/receptionist/Nav";
import ReceptionistHomepage from "@/interfaces/receptionist/pages/Homepage";
import ReceptionistProtectedRoute from "@/interfaces/receptionist/ReceptionistProtectedRoute";
import Layout from "@/ui/customComponents/Layout";
import Error from "@/ui/Error";
import { patientRoutes } from "./receptionist/hr/patients";
import { insuranceRoute } from "./receptionist/insurances";
import { appointmentsRoutes } from "./receptionist/appointments";
import { operationsRoutes } from "./receptionist/operations";
import { doctorsRoutes } from "./receptionist/hr/doctors";
import { testAppointmentsRoutes } from "./receptionist/tests/appointments";
import { testTypesRoutes } from "./receptionist/tests/types";
import { testOrdersRoutes } from "./receptionist/tests/orders";
import { departmentsRoutes } from "./receptionist/departments";
import { billRoute } from "./receptionist/bills";
import { paymentRoute } from "./receptionist/payments";

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
          ...patientRoutes,
          ...insuranceRoute,
          ...appointmentsRoutes,
          ...operationsRoutes,
          ...doctorsRoutes,
          ...testAppointmentsRoutes,
          ...testTypesRoutes,
          ...testOrdersRoutes,
          ...departmentsRoutes,
          ...billRoute,
          ...paymentRoute,
        ],
      },
    ],
  },
];
