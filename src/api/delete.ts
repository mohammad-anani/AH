import axios from "./axios";

export default async function Delete(entity: string, id: number) {
  const response = await axios.delete(`/${entity}/${id}`);

  return response;
}
