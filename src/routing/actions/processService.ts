import update from "@/api/update";

import type { ServicesEntities } from "@/ui/entityComponents/ServicesCard";
import pluralize from "pluralize";
import { redirect, type ActionFunctionArgs } from "react-router-dom";

export default function processService(entity: ServicesEntities) {
  return async function ({ request, params }: ActionFunctionArgs) {
    const url = new URL(request.url);
    const path = url.pathname; // e.g. "/api/service/complete"

    const parts = path.split("/").filter(Boolean);
    const lastSegment = parts[parts.length - 1];

    await update({}, `/${pluralize(entity)}/${params?.["id"]}/${lastSegment}`);

    parts.pop();
    return redirect(parts.join("/"));
  };
}
