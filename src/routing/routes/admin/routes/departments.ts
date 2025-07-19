import Departments from "@/interfaces/admin/pages/Departments";
import DepartmentViewEdit from "@/features/department/ViewEdit";
import DepartmentCard from "@/features/department/Card";

import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import InvalidPath from "@/ui/InvalidPath";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";

export const departmentsRoutes = [
  {
    path: "departments",
    children: [
      {
        index: true,
        Component: Departments,
        loader: listLoader("DepartmentRows"),
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
            Component: AddUpdateForm,
            action: addUpdateAction("Departments"),
          },
        ],
      },
      {
        path: "add",
        Component: AddUpdateForm,
        action: addUpdateAction("Departments"),
      },
    ],
  },
];
