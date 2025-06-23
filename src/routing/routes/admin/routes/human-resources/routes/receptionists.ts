import Receptionists from "@/features/human-resources/Receptionists";
import ReceptionistViewEdit from "@/features/receptionist/ReceptionistViewEdit";
import ReceptionistCard from "@/features/receptionist/ReceptionistCard";
import UpdateReceptionist from "@/features/receptionist/UpdateReceptionist";
import AddReceptionist from "@/features/receptionist/AddReceptionist";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";

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
        Component: ReceptionistViewEdit,
        loader: findByIDLoader("Receptionists"),
        children: [
          {
            index: true,
            Component: ReceptionistCard,
          },
          {
            path: "edit",
            Component: UpdateReceptionist,
            action: addUpdateAction("Receptionists"),
          },
          {
            path: "delete",
            action: deleteAction("Receptionists"),
          },
        ],
      },
      {
        path: "add",
        Component: AddReceptionist,
        action: addUpdateAction("Receptionists"),
      },
    ],
  },
];
