import add from "@/api/add";
import { redirect, type ActionFunctionArgs } from "react-router-dom";

export default async function reserveAction({
  request,
  params,
}: ActionFunctionArgs) {
  const data = await request.json();

  const newID = await add(data, "/test-orders/" + params["id"] + "/reserve");

  return redirect("/receptionist/tests/appointments/" + newID);
}
