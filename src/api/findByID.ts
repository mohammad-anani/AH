import axios from "./axios";

export default async function findByID(url: string) {
  const data = await axios.get(url);

  return data.data[0] || undefined;
}

//to be changed
