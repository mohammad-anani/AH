import { createBrowserRouter } from "react-router-dom";
import Error from "@/ui/Error";
import InvalidPath from "@/ui/InvalidPath";
import { authRoutes } from "./routes/auth";
import { adminRoutes } from "./routes/admin";
import { receptionistRoutes } from "./routes/receptionist";
import { doctorRoutes } from "./routes/doctor";
import listLoader from "@/utils/loaders/listLoader";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      ...authRoutes,
      ...adminRoutes,
      ...receptionistRoutes,
      ...doctorRoutes,
      {
        path: "countries",
        Component: InvalidPath,
        loader: listLoader("Country"),
      },
    ],
  },
]);

export default router;
