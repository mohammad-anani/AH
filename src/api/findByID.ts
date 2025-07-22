import axios from "./axios";

export default async function findByID(urlEndpoint: string, id: number) {
  const data = await axios.get(`/${urlEndpoint}?ID=${id}`);

  return data.data[0] || {};
}

//to be /ID only
