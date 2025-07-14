import Doctors from "@/features/human-resources/Doctors";
import ViewEdit from "@/features/doctor/ViewEdit";
import Card from "@/features/doctor/Card";
import Update from "@/features/doctor/Update";
import Add from "@/features/doctor/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import throwError from "@/utils/helpers/throwError";

export const doctorsRoutes = [
  {
    path: "doctors",
    children: [
      { path: "", Component: Doctors, loader: listLoader("Doctors") },
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
            Component: () => {
              throwError(404, "Not Found", "This URL is not a valid path");
              return null;
            },
            action: deleteAction("Doctors"),
          },
        ],
      },
      { path: "add", Component: Add, action: addUpdateAction("Doctors") },
    ],
  },
];
