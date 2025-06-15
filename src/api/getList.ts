import axios from "./axios";

export async function getList(url: string) {
  const data = await axios.get(url);

  const obj = [data.data, data.data.length];
  return obj;
}
