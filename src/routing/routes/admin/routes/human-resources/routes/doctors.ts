import ViewEdit from "@/features/human-resources/doctor/ViewEdit";
import Card from "@/features/human-resources/doctor/Card";
import Update from "@/features/human-resources/doctor/Update";
import Add from "@/features/human-resources/doctor/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import InvalidPath from "@/ui/InvalidPath";
import Doctors from "@/interfaces/admin/pages/human-resources/Doctors";

export const doctorsRoutes = [
  {
    path: "doctors",
    children: [
      {
        index: true,
        Component: Doctors,
        loader: listLoader("DoctorRows"),
      },
      {
        path: ":id",
        Component: ViewEdit,
        loader: findByIDLoader("Doctors"),
        children: [
          { index: true, Component: Card },
          {
            path: "edit",
            Component: Update,
            action: addUpdateAction("Doctors"),
          },
          {
            path: "delete",
            Component: InvalidPath,
            action: deleteAction("Doctors"),
          },
        ],
      },
      { path: "add", Component: Add, action: addUpdateAction("Doctors") },
    ],
  },
];
