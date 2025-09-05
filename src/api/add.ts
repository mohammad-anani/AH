import axios from "./axios";

export default async function add(data: unknown, url: string) {
  console.log(url, data);

  const response = await axios.post(url, data);

  console.log(response);

  return +response.data;
}
