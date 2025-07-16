import Data from "@/features/tests/order/Data";
import ViewEdit from "@/features/tests/order/ViewEdit";
import Card from "@/features/tests/order/Card";
import Update from "@/features/tests/order/Update";
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
