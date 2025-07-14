import Doctors from "@/features/human-resources/Doctors";
import DoctorViewEdit from "@/features/doctor/DoctorViewEdit";
import DoctorCard from "@/features/doctor/DoctorCard";
import UpdateDoctor from "@/features/doctor/UpdateDoctor";
import AddDoctor from "@/features/doctor/AddDoctor";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import throwError from "@/utils/helpers/throwError";

export const doctorsRoutes = [
  {
    path: "doctors",
    children: [
      { path: "", Component: Doctors, loader: listLoader("Doctors") },
      {
        path: ":id",
        Component: DoctorViewEdit,
        loader: findByIDLoader("Doctors"),
        children: [
          { index: true, Component: DoctorCard },
          {
            path: "edit",
            Component: UpdateDoctor,
            action: addUpdateAction("Doctors"),
          },
          {
            path: "delete",
            Component: () => {
              throwError(404, "Not Found", "This URL is not a valid path");
              return null;
            },
            action: deleteAction("Doctors"),
          },
        ],
      },
      { path: "add", Component: AddDoctor, action: addUpdateAction("Doctors") },
    ],
  },
];
