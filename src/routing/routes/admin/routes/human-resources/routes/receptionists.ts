import Receptionists from "@/interfaces/admin/pages/human-resources/Receptionists";
import ViewEdit from "@/features/human-resources/receptionist/ViewEdit";
import Card from "@/features/human-resources/receptionist/Card";
import Update from "@/features/human-resources/receptionist/Update";
import Add from "@/features/human-resources/receptionist/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import InvalidPath from "@/ui/InvalidPath";

export const receptionistsRoutes = [
  {
    path: "receptionists",
    children: [
      {
        index: true,
        Component: Receptionists,
        loader: listLoader("ReceptionistRows"),
      },
      {
        path: ":id",
        Component: ViewEdit,
        loader: findByIDLoader("Receptionists"),
        children: [
          {
            index: true,
            Component: Card,
          },
          {
            path: "edit",
            Component: Update,
            action: addUpdateAction("Receptionists"),
          },
          {
            path: "delete",
            Component: InvalidPath,
            action: deleteAction("Receptionists"),
          },
        ],
      },
      {
        path: "add",
        Component: Add,
        action: addUpdateAction("Receptionists"),
      },
    ],
  },
];
