import axios from "./axios";

export async function findAdmins(id: number) {
  const data = await axios.get("/Admins?ID=" + id);
  return data.data[0] || {};
}
