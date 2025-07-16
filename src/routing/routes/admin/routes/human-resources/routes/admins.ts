import ViewEdit from "@/features/human-resources/admin/ViewEdit";
import Card from "@/features/human-resources/admin/Card";
import Update from "@/features/human-resources/admin/Update";
import Add from "@/features/human-resources/admin/Add";
import listLoader from "@/utils/loaders/listLoader";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import InvalidPath from "@/ui/InvalidPath";
import Admins from "@/interfaces/admin/pages/human-resources/Admins";

export const adminsRoutes = [
  {
    path: "admins",
    children: [
      {
        index: true,
        Component: Admins,
        loader: listLoader("AdminRows"),
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
            Component: InvalidPath,
            action: deleteAction("Admins"),
          },
        ],
      },
      { path: "add", Component: Add, action: addUpdateAction("Admins") },
    ],
  },
];
