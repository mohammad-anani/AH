import findByIDLoader from "@/utils/loaders/findByIDLoader";
import listLoader from "@/utils/loaders/listLoader";
import InvalidPath from "@/ui/InvalidPath";
import addUpdateAction from "@/utils/actions/addUpdateAction";
import deleteAction from "@/utils/actions/deleteAction";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ListPage from "@/ui/entityComponents/ListPage";
import Card from "@/ui/entityComponents/Card";
import ViewEdit from "@/ui/entityComponents/ViewEdit";
import type { Params, RouteObject } from "react-router-dom";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

export function route<T extends EntityKey>(
  entity: T,
  canAdd: boolean = true,
  canEdit: boolean = true,
  canDelete: boolean = true,
  entityObject: RouteConfig<T>,
  withBack?: boolean,
  loaderPathPrefix?: (params: Params) => string,
  extraRoutes?: [routes: RouteObject[], location: "index" | "id"][],
  withList: boolean = true,
  withID: boolean = true,
  urlPathPrefix?: string,
  withCard: boolean = true,
): RouteObject[] {
  const { rowTemplate, dataFields, filterFields, formConfig, subLinks } =
    entityObject;

  const mainPath =
    (urlPathPrefix ?? "") +
    (entity.startsWith("Test") ? entity.replace("Test", "") : entity) +
    "s";

  return [
    {
      path: mainPath,
      children: [
        withList
          ? {
              index: true,
              element: (
                <ListPage<T>
                  entity={entity}
                  canAdd={canAdd}
                  rowTemplate={rowTemplate}
                  filterFields={filterFields}
                  withBack={withBack ?? false}
                />
              ),
              loader: listLoader(`${entity}Row`, loaderPathPrefix),
            }
          : {
              path: "",
              Component: InvalidPath,
            },
        {
          path: "list",
          Component: InvalidPath,
          loader: listLoader(`${entity}Row`, loaderPathPrefix),
        },
        withID
          ? {
              path: ":id",
              Component: ViewEdit<T>,
              loader: findByIDLoader(entity),
              children: [
                withCard
                  ? {
                      index: true,
                      element: (
                        <Card
                          title={entity}
                          subLinks={subLinks}
                          canDelete={canDelete}
                          canEdit={canEdit}
                          dataFields={dataFields}
                          isModal={false}
                        />
                      ),
                    }
                  : {},
                canDelete
                  ? {
                      path: "delete",
                      action: deleteAction(entity),
                    }
                  : {},
                canEdit
                  ? {
                      path: "edit",
                      element: (
                        <AddUpdateForm
                          formConfig={formConfig}
                          entity={entity}
                        />
                      ),
                      action: addUpdateAction(entity),
                    }
                  : {},
                ...(extraRoutes
                  ?.filter(([, location]) => location === "id")
                  .flatMap(([routes]) => routes) ?? []),
              ].filter(Boolean),
            }
          : {},
        canAdd
          ? {
              path: "add",
              element: (
                <AddUpdateForm formConfig={formConfig} entity={entity} />
              ),
              action: addUpdateAction(entity),
            }
          : {},
        ...(extraRoutes
          ?.filter(([, location]) => location === "index")
          .flatMap(([routes]) => routes) ?? []),
      ].filter(Boolean),
    },
  ];
}
