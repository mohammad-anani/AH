import axios from "./axios";

export async function getList(url: string) {
  const response = await axios.get(url);
  const obj = [response.data, response.data.length];
  return obj;
}
