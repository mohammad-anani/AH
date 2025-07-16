import ViewEdit from "@/features/human-resources/patient/ViewEdit";
import Card from "@/features/human-resources/patient/Card";
import Update from "@/features/human-resources/patient/Update";
import Add from "@/features/human-resources/patient/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import InvalidPath from "@/ui/InvalidPath";
import Patients from "@/interfaces/admin/pages/human-resources/Patients";

export const patientsRoutes = [
  {
    path: "patients",
    children: [
      {
        index: true,
        Component: Patients,
        loader: listLoader("PatientRows"),
      },
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
            Component: InvalidPath,
            action: deleteAction("Patients"),
          },
        ],
      },
      { path: "add", Component: Add, action: addUpdateAction("Patients") },
    ],
  },
];
