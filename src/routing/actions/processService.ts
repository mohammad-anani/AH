import patch from "@/api/patch";
import { toast } from "@/utils/helpers/toast";

import type { ServicesEntities } from "@/ui/entityComponents/ServicesCard";
import * as pluralize from "pluralize";
import { replace, type ActionFunctionArgs } from "react-router-dom";
import { toKebabCase } from "@/utils/formatters/toKebab.ts";
import { formatTitle } from "@/utils/formatters/formatTitle";

export default function processService(entity: ServicesEntities) {
  return async function ({ request, params }: ActionFunctionArgs) {
    const url = new URL(request.url);
    const path = url.pathname; // e.g. "/api/service/complete"
    const data = await request.json();

    const parts = path.split("/").filter(Boolean);
    const lastSegment = parts[parts.length - 1];

    try {
      await patch(
        data,
        `${toKebabCase(pluralize.plural(entity))}/${params?.["id"]}/${lastSegment}`,
      );

      toast(`${formatTitle(entity)} ${lastSegment}d successfully`, "success");

      parts.pop();
      return replace("/" + parts.join("/"));
    } catch (error) {
      toast(`Failed to ${lastSegment} ${formatTitle(entity)}`, "error");
      throw error;
    }
  };
}
