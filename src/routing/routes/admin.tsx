import AdminHomepage from "@/interfaces/admin/pages/Homepage";
import AdminProtectedRoute from "@/interfaces/admin/AdminProtectedRoute";
import { departmentsRoutes } from "./admin/routes/departments";
import { humanResourcesRoutes } from "./admin/routes/human-resources";
import { testsRoutes } from "./admin/routes/tests";
import { operationsRoutes } from "./admin/routes/operations";
import { appointmentsRoutes } from "./admin/routes/appointments";
import { paymentsRoutes } from "./admin/routes/payments";
import Layout from "@/ui/customComponents/Layout";
import Nav from "@/interfaces/admin/Nav";
import Error from "@/ui/Error";

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
          ...paymentsRoutes,
        ],
      },
    ],
  },
];
