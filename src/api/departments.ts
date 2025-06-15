import axios from "./axios";

export async function findDepartment(id: number) {
  const data = await axios.get("/Departments?ID=" + id);
  return data.data[0] || {};
}
