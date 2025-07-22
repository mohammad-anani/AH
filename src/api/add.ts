import type { typesObject } from "@/utils/models/types/typesObject";
import axios from "./axios";
import type { EntityKey } from "@/utils/models/types/util";

export default async function add(
  data: typesObject[EntityKey],
  entity: string,
) {
  // /add

  const url = `/${entity}`;

  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
