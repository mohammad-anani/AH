import { login } from "@/api/login";
import { redirect, type ActionFunctionArgs } from "react-router-dom";

//request
export default async function loginAction({ request }: ActionFunctionArgs) {
  const data = await request.json();

  const { email, password } = data;

  if (!(email && password)) {
    return redirect("/");
  }

  const { ID, Token, Role, RefreshToken } = await login(email, password);

  if (!(Token && RefreshToken && ID && Role)) {
    return redirect("/");
  }

  localStorage.setItem("token", Token);
  localStorage.setItem("refresh-token", RefreshToken);

  // TODO: Replace with proper authentication logic
  if (Role === "Admin") return redirect("/admin");
  if (Role === "Receptionist") return redirect("/receptionist");
  if (Role === "Doctor") return redirect("/doctor");

  // Invalid credentials - redirect back to login
  return redirect("/");
}
