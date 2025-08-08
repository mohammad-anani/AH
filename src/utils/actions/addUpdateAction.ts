import add from "@/api/add";
import update from "@/api/update";
import { redirect, type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import pluralize from "pluralize";
import type { Primitive } from "react-hook-form";

export default function addUpdateAction(
  entity: EntityKey,
  redirection: (request: Request, extra?: Primitive) => string,
) {
  return async function ({ request }: ActionFunctionArgs) {
    const data = await request.json();

    // Log data in development for debugging
    if (import.meta.env.DEV) {
      // removed console.log
    }
    // Fix: Use consistent URL pattern for both add and update
    const newID = data["ID"]
      ? await update(data, `/${pluralize(entity)}/${data["ID"]}`)
      : await add(data, `/${pluralize(entity)}`);
    return redirect(redirection(request, newID));
  };
}
