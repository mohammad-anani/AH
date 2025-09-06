import add from "@/api/add";
import { toast } from "@/utils/helpers/toast";
import { replace, type ActionFunctionArgs } from "react-router-dom";

export default async function reserveAction({
  request,
  params,
}: ActionFunctionArgs) {
  try {
    const data = await request.json();

    const newID = await add(
      data,
      "/appointments/" + params["id"] + "/reserve-follow-up",
    );

    toast("Follow-up appointment reserved successfully", "success");
    return replace("/receptionist/appointments/" + newID);
  } catch (error) {
    toast("Failed to reserve follow-up appointment", "error");
    throw error;
  }
}
