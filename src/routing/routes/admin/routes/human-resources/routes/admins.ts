import Admins from "@/features/human-resources/Admins";
import AdminViewEdit from "@/features/admin/AdminViewEdit";
import AdminCard from "@/features/admin/AdminCard";
import UpdateAdmin from "@/features/admin/UpdateAdmin";
import AddAdmin from "@/features/admin/AddAdmin";
import listLoader from "@/utils/listLoader";
import findByIDLoader from "@/utils/findByIDLoader";

export const adminsRoutes = [
  {
    path: "admins",
    children: [
      { path: "", Component: Admins, loader: listLoader("Admins") },
      {
        path: ":id",
        Component: AdminViewEdit,
        loader: findByIDLoader("Admins"),
        children: [
          { index: true, Component: AdminCard },
          { path: "edit", Component: UpdateAdmin },
        ],
      },
      { path: "add", Component: AddAdmin },
    ],
  },
];
