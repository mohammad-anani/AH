import Data from "@/features/testType/Data";
import ViewEdit from "@/features/testType/ViewEdit";
import Card from "@/features/testType/Card";
import Update from "@/features/testType/Update";
import Add from "@/features/testType/Add";
import InvalidPath from "@/ui/InvalidPath";

export const testTypesRoutes = [
  {
    path: "types",
    children: [
      { index: true, Component: Data },
      {
        path: "add",
        Component: Add,
      },
      {
        path: ":id",
        Component: ViewEdit,
        children: [
          { index: true, Component: Card },
          {
            path: "edit",
            Component: Update,
          },
          {
            path: "delete",
            Component: InvalidPath,
          },
        ],
      },
    ],
  },
];
