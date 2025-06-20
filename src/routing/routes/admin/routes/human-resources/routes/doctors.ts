import Doctors from "@/features/human-resources/Doctors";
import DoctorViewEdit from "@/features/doctor/DoctorViewEdit";
import DoctorCard from "@/features/doctor/DoctorCard";
import UpdateDoctor from "@/features/doctor/UpdateDoctor";
import AddDoctor from "@/features/doctor/AddDoctor";
import findByIDLoader from "@/utils/findByIDLoader";
import listLoader from "@/utils/listLoader";

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
          { path: "edit", Component: UpdateDoctor },
        ],
      },
      { path: "add", Component: AddDoctor },
    ],
  },
];
