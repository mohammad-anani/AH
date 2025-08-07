import { redirect, type ActionFunctionArgs } from "react-router-dom";

//request
export default async function loginAction({ request }: ActionFunctionArgs) {
  const data = await request.json();

  // Log login attempts in development
  if (import.meta.env.DEV) {
    console.log("Login attempt:", { username: data.Username });
  }

  const { Username } = data;

  // TODO: Replace with proper authentication logic
  if (Username === "admin") return redirect("/admin");
  if (Username === "receptionist") return redirect("/receptionist");
  if (Username === "doctor") return redirect("/doctor");

  // Invalid credentials - redirect back to login
  return redirect("/");
}
