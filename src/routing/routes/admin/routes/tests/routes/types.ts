import ViewEdit from "@/features/tests/type/ViewEdit";
import Card from "@/features/tests/type/Card";
import Update from "@/features/tests/type/Update";
import Add from "@/features/tests/type/Add";
import InvalidPath from "@/ui/InvalidPath";
import Types from "@/interfaces/admin/pages/tests/Types";
import listLoader from "@/utils/loaders/listLoader";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";

export const testTypesRoutes = [
  {
    path: "types",
    children: [
      { index: true, Component: Types, loader: listLoader("TestTypeRows") },
      {
        path: "add",
        Component: Add,
        action: addUpdateAction("TestTypes"),
      },
      {
        path: ":id",
        Component: ViewEdit,
        loader: findByIDLoader("TestTypes"),
        children: [
          { index: true, Component: Card },
          {
            path: "edit",
            Component: Update,
            action: addUpdateAction("TestTypes"),
          },
          {
            path: "delete",
            Component: InvalidPath,
            action: deleteAction("TestTypes"),
          },
        ],
      },
    ],
  },
];
