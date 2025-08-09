import leaveAction from "@/routing/actions/leave";
import { route } from "@/routing/entityRoute";
import EmployeeCard, {
  type EmployeeEntities,
} from "@/ui/entityComponents/EmployeeCard";
import InvalidPath from "@/ui/InvalidPath";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

import type { Params, RouteObject } from "react-router-dom";

export function employeeRoute<T extends EmployeeEntities>(
  entity: T,
  entityObject: RouteConfig<T>,
  {
    canAdd = true,
    canEdit = true,
    canDelete = true,
    withBack = true,
    loaderPathPrefix = undefined,
    withList = true,
    withID = true,
    urlPathPrefix = undefined,
    withCard = false,
    extraRoutes = [],
  }: {
    canAdd?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    withBack?: boolean;
    loaderPathPrefix?: (params: Params) => string;
    withList?: boolean;
    withID?: boolean;
    urlPathPrefix?: string;
    withCard?: boolean;
    extraRoutes?: [RouteObject[], "id" | "index"][];
  } = {},
): RouteObject[] {
  const cardRoute: RouteObject[] = [
    {
      index: true,
      element: (
        <EmployeeCard title={entity} dataFields={entityObject.dataFields} />
      ),
    },
  ];

  const leaveRoute: RouteObject[] = [
    { path: "leave", Component: InvalidPath, action: leaveAction(entity) },
  ];

  return route(
    entity,
    canAdd,
    canEdit,
    canDelete,
    entityObject,
    withBack,
    loaderPathPrefix,
    [[cardRoute, "id"], [leaveRoute, "id"], ...(extraRoutes ?? [])],
    withList,
    withID,
    urlPathPrefix,
    withCard,
  );
}
