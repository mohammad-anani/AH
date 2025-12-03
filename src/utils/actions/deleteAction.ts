import Delete from "@/api/delete";

import * as pluralize from "pluralize";
import type { Primitive } from "react-hook-form";
import { replace, type ActionFunctionArgs } from "react-router-dom";
import { toKebabCase } from "../formatters/toKebab.ts";
import { toast } from "../helpers/toast.tsx";
import type { EntityKey } from "../models/types/utils/entityKeys";

export default function deleteAction(
  entity: EntityKey,
  redirection: (request: Request, extra?: Primitive) => string,
) {
  return async function ({ request, params }: ActionFunctionArgs) {
    try {

      const idParam = params["id"];
      const ID = Number(idParam);

      if (!ID) {
        throw new Error("No ID provided for deletion");
      }


      await Delete(`${toKebabCase(pluralize.plural(entity))}/${ID}`);

      toast(`${entity} deleted successfully!`, "success");

      return replace(redirection(request));
    } catch (error) {
      console.error(`Failed to delete ${entity}:`, error);
      toast(`Failed to delete ${entity}. Please try again.`, "error");

      throw error;
    }
  };
}
