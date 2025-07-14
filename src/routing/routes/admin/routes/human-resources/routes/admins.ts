import Admins from "@/features/human-resources/Admins";
import AdminViewEdit from "@/features/admin/AdminViewEdit";
import AdminCard from "@/features/admin/AdminCard";
import UpdateAdmin from "@/features/admin/UpdateAdmin";
import AddAdmin from "@/features/admin/AddAdmin";
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
        Component: AdminViewEdit,
        loader: findByIDLoader("Admins"),
        children: [
          { index: true, Component: AdminCard },
          {
            path: "edit",
            Component: UpdateAdmin,
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
      { path: "add", Component: AddAdmin, action: addUpdateAction("Admins") },
    ],
  },
];
