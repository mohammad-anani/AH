import { employeeRoute } from "@/routing/employeeRoute";
import { doctor } from "@/utils/models/componentsConfig/admin";

export const doctorsRoutes = employeeRoute("Doctor", doctor, {
  canAdd: true,
  canEdit: true,
  canDelete: true,
  withBack: true,
  loaderPathPrefix: undefined,
  withList: true,
  withID: true,
  urlPathPrefix: undefined,
  withCard: false,
  extraRoutes: [],
});
