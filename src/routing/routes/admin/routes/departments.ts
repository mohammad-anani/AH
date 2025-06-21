import Departments from "@/interfaces/admin/pages/Departments";
import DepartmentViewEdit from "@/features/department/DepartmentViewEdit";
import DepartmentCard from "@/features/department/DepartmentCard";
import UpdateDepartment from "@/features/department/UpdateDepartment";
import AddDepartment from "@/features/department/AddDepartment";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";

export const departmentsRoutes = [
  {
    path: "departments",
    children: [
      { path: "", Component: Departments, loader: listLoader("Departments") },
      {
        path: ":id",
        Component: DepartmentViewEdit,
        loader: findByIDLoader("Departments"),
        children: [
          { index: true, Component: DepartmentCard },
          { path: "edit", Component: UpdateDepartment },
        ],
      },
      { path: "add", Component: AddDepartment },
    ],
  },
];
