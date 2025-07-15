import Payments from "@/interfaces/admin/pages/Payments";
import InvalidPath from "@/ui/InvalidPath";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";

export const paymentsRoutes = [
  {
    path: "payments",
    Component: Payments,
    children: [
      { path: "list", Component: InvalidPath, loader: listLoader("Payments") },
      {
        path: ":id",
        Component: InvalidPath,
        loader: findByIDLoader("Payments"),
      },
    ],
  },
];
