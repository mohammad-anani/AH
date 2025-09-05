import add from "@/api/add";
import { replace, type ActionFunctionArgs } from "react-router-dom";

export default async function reserveAction({
  request,
  params,
}: ActionFunctionArgs) {
  const data = await request.json();

  const newID = await add(data, "/test-orders/" + params["id"] + "/reserve");

  return replace("/receptionist/tests/appointments/" + newID);
}
