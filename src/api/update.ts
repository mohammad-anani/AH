import axios from "./axios";

export default async function update(data: unknown, url: string) {
  const response = await axios.put(url, data);

  if (import.meta.env.DEV) {
    // removed console.log
  }

  return response.status === 200;
}
