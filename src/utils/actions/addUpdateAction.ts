import add from "@/api/add";
import update from "@/api/update";
import type { AxiosResponse } from "axios";
import { type ActionFunctionArgs } from "react-router-dom";
import type { EntityKey } from "../models/types/util";

export default function addUpdateAction(entity: EntityKey) {
  return async function ({ request }: ActionFunctionArgs) {
    const data = await request.json();
    let response: AxiosResponse;
    if (data["ID"]) response = await update(data, entity);
    else response = await add(data, entity + "s");

    return response.statusText;
  };
}
