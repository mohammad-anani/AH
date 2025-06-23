/* eslint-disable @typescript-eslint/no-explicit-any */
import add from "@/api/add";
import update from "@/api/update";
import type { AxiosResponse } from "axios";
import { type ActionFunctionArgs } from "react-router-dom";

export default function addUpdateAction(entity: string) {
  return async function ({ request }: ActionFunctionArgs) {
    const data = await request.json();
    let response: AxiosResponse<any, any>;
    if (data["ID"]) response = await update(data, entity);
    else response = await add(data, entity);

    console.log(response);
  };
}
