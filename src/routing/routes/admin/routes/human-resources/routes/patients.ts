import Patients from "@/features/human-resources/Patients";
import PatientViewEdit from "@/features/patient/PatientViewEdit";
import PatientCard from "@/features/patient/PatientCard";
import UpdatePatient from "@/features/patient/UpdatePatient";
import AddPatient from "@/features/patient/AddPatient";
import { findPatientLoader } from "@/interfaces/admin/loaders/patients";
import listLoader from "@/utils/listLoader";

export const patientsRoutes = [
  {
    path: "patients",
    children: [
      { path: "", Component: Patients, loader: listLoader("Patients") },
      {
        path: ":id",
        Component: PatientViewEdit,
        loader: findPatientLoader,
        children: [
          { index: true, Component: PatientCard },
          { path: "edit", Component: UpdatePatient },
        ],
      },
      { path: "add", Component: AddPatient },
    ],
  },
];
