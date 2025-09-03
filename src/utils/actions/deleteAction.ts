import Delete from "@/api/delete";

import { redirect, type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import * as pluralize from "pluralize";
import type { Primitive } from "react-hook-form";

export default function deleteAction(
  entity: EntityKey,
  redirection: (request: Request, extra?: Primitive) => string,
) {
  return async function ({ request, params }: ActionFunctionArgs) {
    const idParam = params["id"]; // route param is lowercase "id"
    const ID = Number(idParam);

    if (!ID) {
      throw new Error("No ID provided for deletion");
    }

    await Delete(`${pluralize.plural(entity)}/${ID}`);

    return redirect(redirection(request));
  };
}
