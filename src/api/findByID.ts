import axios from "./axios";

export default async function findByID(url: string): Promise<unknown> {
  const response = await axios.get(url);
  const result = response.data || undefined;

  return result;
}
