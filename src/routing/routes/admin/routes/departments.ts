import Departments from "@/interfaces/admin/pages/Departments";
import DepartmentViewEdit from "@/features/department/ViewEdit";
import DepartmentCard from "@/features/department/Card";
import UpdateDepartment from "@/features/department/Update";
import AddDepartment from "@/features/department/Add";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import InvalidPath from "@/ui/InvalidPath";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";

export const departmentsRoutes = [
  {
    path: "departments",
    children: [
      {
        index: true,
        Component: Departments,
        loader: listLoader("Departments"),
      },
      {
        path: "list",
        Component: InvalidPath,
        loader: listLoader("Departments"),
      },
      {
        path: ":id",
        Component: DepartmentViewEdit,
        loader: findByIDLoader("Departments"),
        children: [
          {
            index: true,
            Component: DepartmentCard,
          },
          {
            path: "delete",
            action: deleteAction("Departments"),
          },
          {
            path: "edit",
            Component: UpdateDepartment,
            action: addUpdateAction("Departments"),
          },
        ],
      },
      {
        path: "add",
        Component: AddDepartment,
        action: addUpdateAction("Departments"),
      },
    ],
  },
];
