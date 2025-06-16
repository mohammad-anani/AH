import { createBrowserRouter } from "react-router-dom";
import Login from "../interfaces/login/Login";
import AdminHomepage from "../interfaces/admin/pages/Homepage";
import DoctorHomepage from "../interfaces/doctor/Homepage";
import ReceptionistHomepage from "../interfaces/receptionist/Homepage";
import loginAction from "../interfaces/login/loginAction";
import AdminProtectedRoute from "../interfaces/admin/AdminProtectedRoute";
import Tests from "../interfaces/admin/pages/Tests";
import Operations from "../interfaces/admin/pages/Operations";
import Appointments from "../interfaces/admin/pages/Appointments";
import Finance from "../interfaces/admin/pages/Finance";
import DepartmentCard from "../features/department/DepartmentCard";
import AdminLayout from "../interfaces/admin/Layout";
import AddDepartment from "../features/department/AddDepartment";
import UpdateDepartment from "../features/department/UpdateDepartment";
import NavPage from "../features/human-resources/NavPage";
import { findDepartmentLoader } from "../interfaces/admin/loaders/departments";
import PatientCard from "../features/patient/PatientCard";
import UpdatePatient from "../features/patient/UpdatePatient";
import AddPatient from "../features/patient/AddPatient";
import ReceptionistCard from "../features/receptionist/ReceptionistCard";
import UpdateReceptionist from "../features/receptionist/UpdateReceptionist";
import AddReceptionist from "../features/receptionist/AddReceptionist";
import DoctorCard from "../features/doctor/DoctorCard";
import AddDoctor from "../features/doctor/AddDoctor";
import UpdateDoctor from "../features/doctor/UpdateDoctor";
import AdminCard from "../features/admin/AdminCard";
import UpdateAdmin from "../features/admin/UpdateAdmin";
import AddAdmin from "../features/admin/AddAdmin";
import { findPatientLoader } from "../interfaces/admin/loaders/patients";
import { findDoctorLoader } from "../interfaces/admin/loaders/doctors";
import { findAdminLoader } from "../interfaces/admin/loaders/admins";
import { findReceptionistLoader } from "../interfaces/admin/loaders/receptionists";
import Error from "@/ui/Error";
import listLoader from "@/utils/listLoader";
import Departments from "../interfaces/admin/pages/Departments";
import Patients from "../features/human-resources/Patients";
import Doctors from "../features/human-resources/Doctors";
import Admins from "../features/human-resources/Admins";
import Receptionists from "../features/human-resources/Receptionists";
import PatientViewEdit from "@/features/patient/PatientViewEdit";
import DepartmentViewEdit from "@/features/department/DepartmentViewEdit";
import DoctorViewEdit from "@/features/doctor/DoctorViewEdit";
import AdminViewEdit from "@/features/admin/AdminViewEdit";
import ReceptionistViewEdit from "@/features/receptionist/ReceptionistViewEdit";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Login,
        action: loginAction,
      },
      {
        path: "/admin",
        Component: AdminProtectedRoute,
        children: [
          {
            Component: AdminLayout,
            children: [
              {
                path: "",
                Component: AdminHomepage,
              },
              {
                path: "departments",
                children: [
                  {
                    path: "",
                    Component: Departments,
                    loader: listLoader("Departments"),
                  },
                  {
                    path: ":id",
                    Component: DepartmentViewEdit,
                    loader: findDepartmentLoader,
                    children: [
                      { index: true, Component: DepartmentCard },
                      { path: "edit", Component: UpdateDepartment },
                    ],
                  },
                  { path: "add", Component: AddDepartment },
                ],
              },
              {
                path: "human-resources",
                children: [
                  { path: "", Component: NavPage },
                  {
                    path: "patients",
                    children: [
                      {
                        path: "",
                        Component: Patients,
                        loader: listLoader("Patients"),
                      },
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
                  {
                    path: "doctors",
                    children: [
                      {
                        path: "",
                        Component: Doctors,
                        loader: listLoader("Doctors"),
                      },
                      {
                        path: ":id",
                        Component: DoctorViewEdit,
                        loader: findDoctorLoader,
                        children: [
                          { index: true, Component: DoctorCard },
                          { path: "edit", Component: UpdateDoctor },
                        ],
                      },
                      { path: "add", Component: AddDoctor },
                    ],
                  },
                  {
                    path: "admins",
                    children: [
                      {
                        path: "",
                        Component: Admins,
                        loader: listLoader("Admins"),
                      },
                      {
                        path: ":id",
                        Component: AdminViewEdit,
                        loader: findAdminLoader,
                        children: [
                          { index: true, Component: AdminCard },
                          { path: "edit", Component: UpdateAdmin },
                        ],
                      },
                      { path: "add", Component: AddAdmin },
                    ],
                  },
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
                ],
              },
              {
                path: "tests",
                Component: Tests,
              },
              {
                path: "operations",
                Component: Operations,
              },
              {
                path: "appointments",
                Component: Appointments,
              },
              {
                path: "finance",
                Component: Finance,
              },
            ],
          },
        ],
      },
      {
        path: "/doctor",
        Component: DoctorHomepage,
      },
      {
        path: "/receptionist",
        Component: ReceptionistHomepage,
      },
    ],
  },
]);

export default router;
