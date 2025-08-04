import { redirect, type ActionFunctionArgs } from "react-router-dom";

//request
export default async function loginAction({ request }: ActionFunctionArgs) {
  const data = await request.json();

  console.log(data);
  const { Username } = data;

  if (Username === "admin") return redirect("/admin");

  if (Username === "receptionist") return redirect("/receptionist");
}
