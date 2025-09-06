import add from "@/api/add";
import { toast } from "@/utils/helpers/toast";
import { replace, type ActionFunctionArgs } from "react-router-dom";

export default async function payAction({ request }: ActionFunctionArgs) {
  try {
    const data = await request.json();

    await add(data, "/payments");

    toast("Payment processed successfully", "success");
    return replace("/receptionist/finance/payments");
  } catch (error) {
    toast("Failed to process payment", "error");
    throw error;
  }
}
