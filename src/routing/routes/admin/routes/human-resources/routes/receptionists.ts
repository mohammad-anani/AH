import Receptionists from "@/features/human-resources/Receptionists";
import ViewEdit from "@/features/receptionist/ViewEdit";
import Card from "@/features/receptionist/Card";
import Update from "@/features/receptionist/Update";
import Add from "@/features/receptionist/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import throwError from "@/utils/helpers/throwError";

export const receptionistsRoutes = [
  {
    path: "receptionists",
    children: [
      {
        path: "",
        Component: Receptionists,
        loader: listLoader("Receptionists"),
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
            Component: () => {
              throwError(404, "Not Found", "This URL is not a valid path");
              return null;
            },
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
