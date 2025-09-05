import add from "@/api/add";
import { replace, type ActionFunctionArgs } from "react-router-dom";

export default async function reserveAction({
  request,
  params,
}: ActionFunctionArgs) {
  const data = await request.json();

  const newID = await add(
    data,
    "/appointments/" + params["id"] + "/reserve-follow-up",
  );

  return replace("/receptionist/appointments/" + newID);
}
