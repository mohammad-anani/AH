import { employeeRoute } from "@/routing/employeeRoute";
import { admin } from "@/utils/models/componentsConfig/admin";
import InvalidPath from "@/ui/InvalidPath";
import leaveAction from "@/routing/actions/leave";
import type { RouteObject } from "react-router-dom";

const leaveRoute: RouteObject[] = [
  { path: "leave", Component: InvalidPath, action: leaveAction("Admin") },
];

export const adminsRoutes = employeeRoute("Admin", admin, {
  canAdd: true,
  canEdit: true,
  canDelete: true,
  withBack: true,
  loaderPathPrefix: undefined,
  withList: true,
  withID: true,
  urlPathPrefix: undefined,
  withCard: false,
  extraRoutes: [[leaveRoute, "id"]],
});
