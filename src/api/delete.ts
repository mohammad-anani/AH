import axios from "./axios";

export default async function Delete(urlEndpoint: string, id: number) {
  const response = await axios.delete(`/${urlEndpoint}?ID=${id}`);

  return response;
}
