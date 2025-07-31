import axios from "./axios";

export default async function Delete(url: string) {
  const response = await axios.delete(url);

  return response;
}

//to implement response
