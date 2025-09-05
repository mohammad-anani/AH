import axios from "./axios";

export default async function findByID(url: string): Promise<unknown> {
  console.log(url);

  const response = await axios.get(url);

  console.log(response);

  const result = response.data || undefined;

  return result;
}
