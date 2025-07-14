import Admins from "@/features/human-resources/Admins";
import ViewEdit from "@/features/admin/ViewEdit";
import Card from "@/features/admin/Card";
import Update from "@/features/admin/Update";
import Add from "@/features/admin/Add";
import listLoader from "@/utils/loaders/listLoader";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import throwError from "@/utils/helpers/throwError";

export const adminsRoutes = [
  {
    path: "admins",
    children: [
      {
        path: "",
        Component: Admins,
        loader: listLoader("Admins"),
      },
      {
        path: ":id",
        Component: ViewEdit,
        loader: findByIDLoader("Admins"),
        children: [
          { index: true, Component: Card },
          {
            path: "edit",
            Component: Update,
            action: addUpdateAction("Admins"),
          },
          {
            path: "delete",
            Component: () => {
              throwError(404, "Not Found", "This URL is not a valid path");
              return null;
            },
            action: deleteAction("Admins"),
          },
        ],
      },
      { path: "add", Component: Add, action: addUpdateAction("Admins") },
    ],
  },
];
