/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "./axios";

export default async function update(data: any, entity: string) {
  const url = `/${entity}/${data["ID"]}/addUpdate`;

  const response = await axios.patch(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
