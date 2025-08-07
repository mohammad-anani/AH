import add from "@/api/add";
import update from "@/api/update";
import { type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import pluralize from "pluralize";

export default function addUpdateAction(entity: EntityKey) {
  return async function ({ request }: ActionFunctionArgs) {
    const data = await request.json();

    console.log(data);

    const response = data["ID"]
      ? await update(data, `/${entity}s/${data["ID"]}`)
      : await add(data, `/${pluralize(entity)}`);

    return response.statusText;
  };
}
