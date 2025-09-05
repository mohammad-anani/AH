import axios from "./axios";

export default async function update(data: unknown, url: string) {
  console.log(url, data);

  const response = await axios.put(url, data);

  console.log(response);

  return response.status === 200;
}
