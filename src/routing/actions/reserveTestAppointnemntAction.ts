import add from "@/api/add";
import { toast } from "@/utils/helpers/toast";
import { replace, type ActionFunctionArgs } from "react-router-dom";

export default async function reserveAction({
  request,
  params,
}: ActionFunctionArgs) {
  try {
    const data = await request.json();

    const newID = await add(data, "/test-orders/" + params["id"] + "/reserve");

    toast("Test appointment reserved successfully", "success");
    return replace("/receptionist/tests/appointments/" + newID);
  } catch (error) {
    toast("Failed to reserve test appointment", "error");
    throw error;
  }
}
