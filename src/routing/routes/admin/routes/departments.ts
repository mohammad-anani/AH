import Departments from "@/interfaces/admin/pages/Departments";
import DepartmentViewEdit from "@/features/department/DepartmentViewEdit";
import DepartmentCard from "@/features/department/DepartmentCard";
import UpdateDepartment from "@/features/department/UpdateDepartment";
import AddDepartment from "@/features/department/AddDepartment";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import throwError from "@/utils/helpers/throwError";
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
        Component: () => {
          throwError(404, "Not Found", "This URL is not a valid path");
          return null;
        },
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
