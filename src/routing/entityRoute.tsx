import DepartmentViewEdit from "@/features/department/ViewEdit";
import DepartmentCard from "@/features/department/Card";

import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import InvalidPath from "@/ui/InvalidPath";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ListPage from "@/ui/entityComponents/ListPage";
import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey, Key } from "@/utils/models/types/util";

export const route = (
  entity: EntityKey,
  canAdd: boolean = true,
  canEdit: boolean = true,
  canDelete: boolean = true,
  rowTemplate: [string[], (item: typesObject[EntityKey]) => [], number[]],

  filterFields: Key[],
) => [
  {
    path: entity + "s",
    children: [
      {
        index: true,
        element: (
          <ListPage<typesObject[EntityKey]>
            title={entity}
            canAdd={canAdd}
            rowTemplate={rowTemplate}
            filterFields={filterFields}
          />
        ),
        loader: listLoader(`${entity}Row`),
      },
      {
        path: "list",
        Component: InvalidPath,
        loader: listLoader(entity),
      },
      {
        path: ":id",
        Component: DepartmentViewEdit,
        loader: findByIDLoader(entity),
        children: [
          {
            index: true,
            Component: DepartmentCard,
          },
          canDelete && {
            path: "delete",
            action: deleteAction(entity),
          },
          canEdit && {
            path: "edit",
            element: <AddUpdateForm entity={entity} />,
            action: addUpdateAction(entity),
          },
        ],
      },
      canAdd && {
        path: "add",
        element: <AddUpdateForm entity={entity} />,
        action: addUpdateAction(entity),
      },
    ],
  },
];
