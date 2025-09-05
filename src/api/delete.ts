import axios from "./axios";

export default async function Delete(url: string) {
  console.log(url);

  const response = await axios.delete(url);

  console.log(response);

  return response.status === 200;
}
