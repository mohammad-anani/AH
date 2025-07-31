import axios from "./axios";

export default async function add(data: unknown, url: string) {
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

//to implement response
