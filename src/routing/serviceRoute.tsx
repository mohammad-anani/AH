import { route } from "@/routing/entityRoute";

import ServiceProcess, {
  type Process,
} from "@/ui/entityComponents/ServiceProcess";
import ServiceCard, {
  type ServicesEntities,
} from "@/ui/entityComponents/ServicesCard";

import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import type {
  customFormProps,
  DataTypes,
  DotAccess,
  Role,
} from "@/utils/models/types/utils/Form&Filter";
import type { Params, RouteObject } from "react-router-dom";
import processService from "./actions/processService";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type {
  DisplayEntityKey,
  EntityKey,
} from "@/utils/models/types/utils/entityKeys";
import type { Primitive } from "react-hook-form";

export type FormKey<T extends DisplayEntityKey> = [
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
  type: DataTypes | "custom",
  mode: Set<Process> | "All",
  data?:
    | Array<Primitive>
    | customFormProps
    | [string, string]
    | string
    | [EntityKey, RouteConfig<EntityKey>, Role],
];

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

  canReschedule: boolean = false,
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
          canReschedule={canReschedule}
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

  const Reschedule: RouteObject[] = [
    {
      path: "reschedule",
      action: processService(entity),

      element: (
        <ServiceProcess
          process="Reschedule"
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
      canReschedule ? [Reschedule, "id"] : [[], "id"],
      ...(extraRoutes || []),
    ],
    withList,
    withID,
    urlPathPrefix,
    false,
  );
}
