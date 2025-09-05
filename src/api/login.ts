import axios from "./axios";

export async function login(email: string, password: string) {
  console.log(email);

  const response = await axios.post("auth/signin", { email, password });

  console.log(response);

  const responseData = response.data;

  const { ID, Role, Token, RefreshToken } = responseData;

  return { ID, Role, Token, RefreshToken };
}
