import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import InvalidPath from "@/ui/InvalidPath";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ListPage from "@/ui/entityComponents/ListPage";
import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey, Key } from "@/utils/models/types/util";
import Card from "@/ui/entityComponents/Card";
import type { Primitive } from "zod";
import ViewEdit from "@/ui/entityComponents/ViewEdit";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

export function route<T extends EntityKey>(
  entity: T,
  canAdd: boolean = true,
  canEdit: boolean = true,
  canDelete: boolean = true,
  rowTemplate: [string[], (item: rowTypesObject[T]) => Primitive[], number[]],
  filterFields: Key[],
  subLinks: (item: typesObject[T]) => [text: string, link: string][],
  headerWidth?: number,
) {
  return [
    {
      path: entity + "s",
      children: [
        {
          index: true,
          element: (
            <ListPage<T>
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
          Component: ViewEdit<T>,
          loader: findByIDLoader(entity),
          children: [
            {
              index: true,
              element: (
                <Card
                  title={entity}
                  subLinks={subLinks}
                  canDelete={canDelete}
                  canEdit={canEdit}
                  headerWidth={headerWidth}
                />
              ),
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
}
