import add from "@/api/add";
import update from "@/api/update";
import { redirect, type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import * as pluralize from "pluralize";
import type { Primitive } from "react-hook-form";

export default function addUpdateAction(
  entity: EntityKey,
  redirection: (request: Request, extra?: Primitive) => string,
) {
  return async function ({ request }: ActionFunctionArgs) {
    const data = await request.json();

    let extra: Primitive | undefined;

    const isAdd = request.url.endsWith("/add");

    if (!isAdd) {
      const id = request.url.split("/")[-2];
      const success = await update(data, `${pluralize.plural(entity)}/${id}`);
      extra = success; // pass ID for redirect if update succeeded
    } else {
      // Add: no ID yet
      const newID = await add(data, `${pluralize.plural(entity)}`);
      extra = newID;
    }

    return redirect(redirection(request, extra));
  };
}
