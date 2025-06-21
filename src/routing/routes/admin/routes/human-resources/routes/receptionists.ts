import Receptionists from "@/features/human-resources/Receptionists";
import ReceptionistViewEdit from "@/features/receptionist/ReceptionistViewEdit";
import ReceptionistCard from "@/features/receptionist/ReceptionistCard";
import UpdateReceptionist from "@/features/receptionist/UpdateReceptionist";
import AddReceptionist from "@/features/receptionist/AddReceptionist";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";

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
          { index: true, Component: ReceptionistCard },
          { path: "edit", Component: UpdateReceptionist },
        ],
      },
      { path: "add", Component: AddReceptionist },
    ],
  },
];
