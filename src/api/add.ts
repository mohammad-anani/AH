/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "./axios";

export default async function add(data: any, entity: string) {
  // /add

  const url = `/${entity}`;

  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
