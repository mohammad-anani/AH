import axios from "./axios";

export default async function add(data: unknown, url: string) {
  const response = await axios.post(url, data);
  console.log(response);

  if (import.meta.env.DEV) {
    // removed console.log
  }
  console.log(response.data);
  return +response.data;
}
