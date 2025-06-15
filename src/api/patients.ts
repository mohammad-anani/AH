import axios from "./axios";

export async function findPatient(id: number) {
  const data = await axios.get("/Patients?ID=" + id);
  return data.data[0] || {};
}
