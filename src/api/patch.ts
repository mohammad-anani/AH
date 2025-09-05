import axios from "./axios";

export default async function patch(data: unknown, url: string) {
  console.log(url, data);

  const response = await axios.patch(url, data);

  console.log(response);

  return response.status === 200;
}
