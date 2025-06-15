import axios from "./axios";

export async function findDoctor(id: number) {
  const data = await axios.get("/Doctors?ID=" + id);
  return data.data[0] || {};
}
