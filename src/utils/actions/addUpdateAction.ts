import add from "@/api/add";
import update from "@/api/update";
import * as pluralize from "pluralize";
import type { Primitive } from "react-hook-form";
import { replace, type ActionFunctionArgs } from "react-router-dom";
import { toKebabCase } from "../formatters/toKebab.ts";
import { toast } from "../helpers/toast.tsx";
import type { EntityKey } from "../models/types/utils/entityKeys";

export default function addUpdateAction(
  entity: EntityKey,
  redirection: (request: Request, extra?: Primitive) => string,
) {
  return async function ({ request }: ActionFunctionArgs) {
    try {
      const data = await request.json();

      let extra;

      const isAdd = request.url.endsWith("/add");

      if (!isAdd) {
        const urlparts = request.url.split("/");
        const id = urlparts[urlparts.length - 2];
        const success = await update(
          data,
          `${toKebabCase(pluralize.plural(entity))}/${id}`,
        );

        extra = success; // pass ID for redirect if update succeeded
        toast(`${entity} updated successfully!`, "success");
      } else {
        // Add: no ID yet

        const newID = await add(
          data,
          `${toKebabCase(pluralize.plural(entity))}`,
        );
        extra = newID;
        toast(`${entity} added successfully!`, "success");
      }

      return replace(redirection(request, extra));
    } catch (error) {
      const isAdd = request.url.endsWith("/add");
      const action = isAdd ? "add" : "update";

      console.error(`Failed to ${action} ${entity}:`, error);
      toast(`Failed to ${action} ${entity}. Please try again.`, "error");

      // Re-throw to let React Router handle the error boundary
      throw error;
    }
  };
}
