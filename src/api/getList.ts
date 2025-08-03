import axios from "./axios";

export default async function getList(url: string) {
  console.log(url);
  const response = await axios.get(url);
  const obj = [response.data, response.data.length];

  return obj;
}

//to change obj
