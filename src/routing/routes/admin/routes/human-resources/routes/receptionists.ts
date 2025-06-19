import Receptionists from "@/features/human-resources/Receptionists";
import ReceptionistViewEdit from "@/features/receptionist/ReceptionistViewEdit";
import ReceptionistCard from "@/features/receptionist/ReceptionistCard";
import UpdateReceptionist from "@/features/receptionist/UpdateReceptionist";
import AddReceptionist from "@/features/receptionist/AddReceptionist";
import { findReceptionistLoader } from "@/interfaces/admin/loaders/receptionists";
import listLoader from "@/utils/listLoader";

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
        loader: findReceptionistLoader,
        children: [
          { index: true, Component: ReceptionistCard },
          { path: "edit", Component: UpdateReceptionist },
        ],
      },
      { path: "add", Component: AddReceptionist },
    ],
  },
];
