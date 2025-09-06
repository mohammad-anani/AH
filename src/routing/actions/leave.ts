import patch from "@/api/patch";
import type { EmployeeEntities } from "@/ui/entityComponents/EmployeeCard";
import { toast } from "@/utils/helpers/toast";

import * as pluralize from "pluralize";
import { replace, type ActionFunctionArgs } from "react-router-dom";
import { toKebabCase } from "@/utils/formatters/toKebab.ts";
import { formatTitle } from "@/utils/formatters/formatTitle";

export default function leaveAction(entity: EmployeeEntities) {
  return async function ({ request, params }: ActionFunctionArgs) {
    const url = new URL(request.url);
    const path = url.pathname; // e.g. "/api/service/complete"

    try {
      await patch(
        {},
        `${toKebabCase(pluralize.plural(entity))}/${params?.["id"]}/leave`,
      );

      toast(`${formatTitle(entity)} has left successfully`, "success");
      return replace(path.replace("/leave", ""));
    } catch (error) {
      toast(`Failed to process leave for ${formatTitle(entity)}`, "error");
      throw error;
    }
  };
}
