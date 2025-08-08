import add from "@/api/add";
import update from "@/api/update";
import { type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import pluralize from "pluralize";

export default function addUpdateAction(entity: EntityKey) {
  return async function ({ request }: ActionFunctionArgs) {
    const data = await request.json();

    // Log data in development for debugging
    if (import.meta.env.DEV) {
      // removed console.log
    }

    // Fix: Use consistent URL pattern for both add and update
    const response = data["ID"]
      ? await update(data, `/${pluralize(entity)}/${data["ID"]}`)
      : await add(data, `/${pluralize(entity)}`);

    return {
      success: true,
      status: response.status,
      message: data["ID"] ? "Updated successfully" : "Created successfully",
    };
  };
}
