import axios from "./axios";

export default async function patch(data: unknown, url: string) {
  const response = await axios.patch(url, data);

  if (import.meta.env.DEV) {
    // removed console.log
  }

  return response.status === 200;
}
