import { login } from "@/api/login";
import throwError from "@/utils/helpers/throwError";
import { replace, type ActionFunctionArgs } from "react-router-dom";

export default async function loginAction({ request }: ActionFunctionArgs) {
  const data = await request.json();

  const { Email, Password } = data;


  if (!(Email && Password)) {
    return replace("/");
  }

  const { ID, Token, Role, RefreshToken } = await login(Email, Password);

  if (!(Token && RefreshToken && ID && Role)) {
    throwError(500);
  }

  localStorage.setItem("token", Token);
  localStorage.setItem("refresh-token", RefreshToken);

  if (Role === "Admin") return replace("/admin");
  if (Role === "Receptionist") return replace("/receptionist");
  if (Role === "Doctor") return replace("/doctor");

  return replace("/");
}
