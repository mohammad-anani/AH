import Data from "@/features/testType/Data";
import ViewEdit from "@/features/testType/ViewEdit";
import Card from "@/features/testType/Card";
import Update from "@/features/testType/Update";
import Add from "@/features/testType/Add";
import Row from "@/features/testType/Row";
import Header from "@/features/testType/Header";
import Form from "@/features/testType/Form";

export const testTypesRoutes = [
  {
    path: "types",
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
