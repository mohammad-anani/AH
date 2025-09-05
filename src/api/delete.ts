import axios from "./axios";

export default async function Delete(url: string) {
  const response = await axios.delete(url);

  if (import.meta.env.DEV) {
    // removed console.log
  }

  return response.status === 200;
}
