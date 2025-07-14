import Data from "@/features/testOrder/Data";
import ViewEdit from "@/features/testOrder/ViewEdit";
import Card from "@/features/testOrder/Card";
import Update from "@/features/testOrder/Update";
import Add from "@/features/testOrder/Add";
import Row from "@/features/testOrder/Row";
import Header from "@/features/testOrder/Header";
import Form from "@/features/testOrder/Form";

export const testOrdersRoutes = [
  {
    path: "orders",
    children: [
      { index: true, Component: Data },
      { path: "header", Component: Header },
      { path: "row", Component: Row },
      { path: "form", Component: Form },
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
            Component: () => {
              throw new Error("This URL is not a valid path");
              return null;
            },
          },
        ],
      },
    ],
  },
];
