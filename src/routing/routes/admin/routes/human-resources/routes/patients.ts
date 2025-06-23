import Patients from "@/features/human-resources/Patients";
import PatientViewEdit from "@/features/patient/PatientViewEdit";
import PatientCard from "@/features/patient/PatientCard";
import UpdatePatient from "@/features/patient/UpdatePatient";
import AddPatient from "@/features/patient/AddPatient";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";

export const patientsRoutes = [
  {
    path: "patients",
    children: [
      { path: "", Component: Patients, loader: listLoader("Patients") },
      {
        path: ":id",
        Component: PatientViewEdit,
        loader: findByIDLoader("Patients"),
        children: [
          { index: true, Component: PatientCard },
          {
            path: "edit",
            Component: UpdatePatient,
            action: addUpdateAction("Patients"),
          },
          {
            path: "delete",
            action: deleteAction("Patients"),
          },
        ],
      },
      {
        path: "add",
        Component: AddPatient,
        action: addUpdateAction("Patients"),
      },
    ],
  },
];
