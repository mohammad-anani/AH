import Data from "@/features/testOrder/Data";
import ViewEdit from "@/features/testOrder/ViewEdit";
import Card from "@/features/testOrder/Card";
import Update from "@/features/testOrder/Update";
import InvalidPath from "@/ui/InvalidPath";

export const testOrdersRoutes = [
  {
    path: "orders",
    children: [
      { index: true, Component: Data },

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
