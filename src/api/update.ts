import type { typesObject } from "@/utils/models/types/typesObject";
import axios from "./axios";
import type { EntityKey } from "@/utils/models/types/util";

export default async function update(
  data: typesObject[EntityKey],
  entity: string,
) {
  const url = `/${entity}/${data["ID"]}`;

  const response = await axios.patch(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
