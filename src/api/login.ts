import axios from "./axios";

export async function login(email: string, password: string) {

  const response = await axios.post("auth/signin", { email, password });

  console.log(response);

  const responseData = response.data;

  if (typeof (responseData) === 'string' && responseData.toLowerCase().includes("invalid"))
    return { ID: -1, Role: '', Token: '', RefreshToken: '' };

  const { ID, Role, Token, RefreshToken } = responseData;

  return { ID, Role, Token, RefreshToken };
}
