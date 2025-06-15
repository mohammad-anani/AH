import axios from "./axios";

export async function findReceptionist(id: number) {
  const data = await axios.get("/Receptionists?ID=" + id);
  return data.data[0] || {};
}
