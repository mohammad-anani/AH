import { createBrowserRouter } from "react-router-dom";
import Error from "@/ui/Error";
import { authRoutes } from "./routes/auth";
import { adminRoutes } from "./routes/admin";
import { receptionistRoutes } from "./routes/receptionist";
import { doctorRoutes } from "./routes/doctor";
import throwError from "@/utils/helpers/throwError";
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
        Component: () => {
          throwError(404, "Not Found", "This URL is not a valid path");
          return null;
        },
        loader: listLoader("Countries"),
      },
    ],
  },
]);

export default router;
