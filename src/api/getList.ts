import axios from "./axios";

export default async function getList(
  url: string,
): Promise<[unknown[], number]> {
  console.log(url);

  const response = await axios.get(url);

  console.log(response);

  const result: [unknown[], number] = [
    response.data.Items,
    response.data.Count,
  ];

  return result;
}
