import { route } from "@/routing/entityRoute";

import ServiceProcess from "@/ui/entityComponents/ServiceProcess";
import ServiceCard, {
  type ServicesEntities,
} from "@/ui/entityComponents/ServicesCard";

import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import type { Params, RouteObject } from "react-router-dom";
import processService from "./actions/processService";

export function serviceRoute<T extends ServicesEntities>(
  entity: T,
  entityObject: RouteConfig<T>,
  formFields: FormKey<T>[],
  extraRoutes?: [RouteObject[], "id" | "index"][],
  canStart: boolean = true,
  canCancel: boolean = true,
  canComplete: boolean = true,
  canAdd: boolean = true,
  canEdit: boolean = true,
  canDelete: boolean = false,
  withBack: boolean = false,
  loaderPathPrefix?: (params: Params) => string,
  withList: boolean = true,
  withID: boolean = true,
  urlPathPrefix?: string,
  withCard: boolean = false,
) {
  const Card: RouteObject[] = [
    {
      index: true,
      element: (
        <ServiceCard
          title={entity}
          subLinks={entityObject.subLinks}
          dataFields={entityObject.dataFields}
          canCancel={canCancel}
          canStart={canStart}
          canComplete={canComplete}
          canEdit={canEdit}
        />
      ),
    },
  ];

  const Start: RouteObject[] = [
    {
      path: "start",
      action: processService(entity),
      element: (
        <ServiceProcess
          process="Start"
          entity={entity}
          formFields={formFields}
        />
      ),
    },
  ];

  const Cancel: RouteObject[] = [
    {
      path: "cancel",
      action: processService(entity),

      element: (
        <ServiceProcess
          process="Cancel"
          entity={entity}
          formFields={formFields}
        />
      ),
    },
  ];

  const Complete: RouteObject[] = [
    {
      path: "complete",
      action: processService(entity),

      element: (
        <ServiceProcess
          process="Complete"
          entity={entity}
          formFields={formFields}
        />
      ),
    },
  ];

  return route(
    entity,
    canAdd,
    canEdit,
    canDelete,
    entityObject,
    withBack,
    loaderPathPrefix,
    [
      [Card, "id"],
      canStart ? [Start, "id"] : [[], "id"],
      canCancel ? [Cancel, "id"] : [[], "id"],
      canComplete ? [Complete, "id"] : [[], "id"],
      ...(extraRoutes || []),
    ],
    withList,
    withID,
    urlPathPrefix,
    withCard,
  );
}
