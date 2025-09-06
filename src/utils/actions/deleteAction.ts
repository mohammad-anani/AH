import Delete from "@/api/delete";

import { replace, type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import * as pluralize from "pluralize";
import type { Primitive } from "react-hook-form";
import { toKebabCase } from "../formatters/toKebab.ts";
import { toast } from "../helpers/toast.tsx";

export default function deleteAction(
  entity: EntityKey,
  redirection: (request: Request, extra?: Primitive) => string,
) {
  return async function ({ request, params }: ActionFunctionArgs) {
    try {
      const idParam = params["id"]; // route param is lowercase "id"
      const ID = Number(idParam);

      if (!ID) {
        throw new Error("No ID provided for deletion");
      }

      console.log(ID);
  
      await Delete(`${toKebabCase(pluralize.plural(entity))}/${ID}`);

      toast(`${entity} deleted successfully!`, "success");

      return replace(redirection(request));
    } catch (error) {
      console.error(`Failed to delete ${entity}:`, error);
      toast(`Failed to delete ${entity}. Please try again.`, "error");

      // Re-throw to let React Router handle the error boundary
      throw error;
    }
  };
}
