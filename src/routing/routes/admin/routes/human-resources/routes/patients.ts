import Patients from "@/features/human-resources/Patients";
import ViewEdit from "@/features/patient/ViewEdit";
import Card from "@/features/patient/Card";
import Update from "@/features/patient/Update";
import Add from "@/features/patient/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import throwError from "@/utils/helpers/throwError";

export const patientsRoutes = [
  {
    path: "patients",
    children: [
      { path: "", Component: Patients, loader: listLoader("Patients") },
      {
        path: ":id",
        Component: ViewEdit,
        loader: findByIDLoader("Patients"),
        children: [
          { index: true, Component: Card },
          {
            path: "edit",
            Component: Update,
            action: addUpdateAction("Patients"),
          },
          {
            path: "delete",
            Component: () => {
              throwError(404, "Not Found", "This URL is not a valid path");
              return null;
            },
            action: deleteAction("Patients"),
          },
        ],
      },
      { path: "add", Component: Add, action: addUpdateAction("Patients") },
    ],
  },
];
