import AdminProtectedRoute from "@/interfaces/admin/AdminProtectedRoute";
import Nav from "@/interfaces/admin/Nav";

import { appointmentsRoutes } from "./admin/appointments";
import { billRoute } from "./admin/bills";
import { departmentsRoutes } from "./admin/departments";
import { humanResourcesRoutes } from "./admin/human-resources";
import { insuranceRoute } from "./admin/insurances";
import { operationsRoutes } from "./admin/operations";
import { paymentRoute } from "./admin/payments";
import { testsRoutes } from "./admin/tests";
import Error from "@/ui/Error";
import Layout from "@/ui/customComponents/Layout";
import AdminHomepage from "@/interfaces/admin/pages/Homepage";

export const adminRoutes = [
  {
    path: "/admin",
    errorElement: <Error />,
    Component: AdminProtectedRoute,
    children: [
      {
        element: (
          <Layout>
            <Nav />
          </Layout>
        ),
        children: [
          { path: "", Component: AdminHomepage },
          ...departmentsRoutes,
          ...humanResourcesRoutes,
          ...testsRoutes,
          ...operationsRoutes,
          ...appointmentsRoutes,
          ...billRoute,
          ...insuranceRoute,
          ...paymentRoute,
        ],
      },
    ],
  },
];
