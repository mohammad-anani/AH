import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import InvalidPath from "@/ui/InvalidPath";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ListPage from "@/ui/entityComponents/ListPage";
import type { typesObject } from "@/utils/models/types/typesObject";
import type { EntityKey } from "@/utils/models/types/util";
import Card from "@/ui/entityComponents/Card";
import type { Primitive } from "zod";
import ViewEdit from "@/ui/entityComponents/ViewEdit";
import { listPageConfig } from "@/utils/models/listPageConfig";

export function route<T extends EntityKey>(
  entity: T,
  canAdd: boolean = true,
  canEdit: boolean = true,
  canDelete: boolean = true,
  subLinks: (item: typesObject[T]) => [text: string, link: string][],
  dataFields: (
    item: typesObject[T],
  ) => [label: string, value: Primitive, link?: string][],

  headerWidth?: number,
) {
  const mainPath =
    (entity.startsWith("Test") ? entity.replace("Test", "") : entity) + "s";

  const [rowTemplate, filterFields] = listPageConfig[entity];

  return [
    {
      path: mainPath,
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
          loader: listLoader(`${entity}Row`),
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
                  dataFields={dataFields}
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
