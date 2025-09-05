import axios from "./axios";

export default async function getList(
  url: string,
): Promise<[unknown[], number]> {
  const response = await axios.get(url);
  const result: [unknown[], number] = [
    response.data.Items,
    response.data.Count,
  ];

  return result;
}
