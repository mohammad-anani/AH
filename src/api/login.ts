import axios from "./axios";

export async function login(email: string, password: string) {
  const response = await axios.post("auth/signin", { email, password });

  const responseData = response.data;

  const { ID, Role, Token, RefreshToken } = responseData;

  return { ID, Role, Token, RefreshToken };
}
