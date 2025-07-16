import Data from "@/features/tests/type/Data";
import ViewEdit from "@/features/tests/type/ViewEdit";
import Card from "@/features/tests/type/Card";
import Update from "@/features/tests/type/Update";
import Add from "@/features/tests/type/Add";
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
