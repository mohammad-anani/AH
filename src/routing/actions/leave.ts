import update from "@/api/update";
import type { EmployeeEntities } from "@/ui/entityComponents/EmployeeCard";

import pluralize from "pluralize";
import { redirect, type ActionFunctionArgs } from "react-router-dom";

export default function leaveAction(entity: EmployeeEntities) {
  return async function ({ request, params }: ActionFunctionArgs) {
    const url = new URL(request.url);
    const path = url.pathname; // e.g. "/api/service/complete"

    const parts = path.split("/").filter(Boolean);

    await update({}, `/${pluralize(entity)}/${params?.["id"]}/leave`);

    return redirect(parts.join("/"));
  };
}
