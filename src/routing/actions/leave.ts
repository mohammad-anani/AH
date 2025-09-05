import patch from "@/api/patch";
import type { EmployeeEntities } from "@/ui/entityComponents/EmployeeCard";

import * as pluralize from "pluralize";
import { replace, type ActionFunctionArgs } from "react-router-dom";
import { toKebabCase } from "@/utils/formatters/toKebab.ts";

export default function leaveAction(entity: EmployeeEntities) {
  return async function ({ request, params }: ActionFunctionArgs) {
    const url = new URL(request.url);
    const path = url.pathname; // e.g. "/api/service/complete"

    const parts = path.split("/").filter(Boolean);

    await patch(
      {},
      `${toKebabCase(pluralize.plural(entity))}/${params?.["id"]}/leave`,
    );

    return replace("/" + parts.join("/"));
  };
}
