import add from "@/api/add";
import { toast } from "@/utils/helpers/toast";
import {
  replace,
  type ActionFunctionArgs,
  type Params,
} from "react-router-dom";

export default function payAction(url: (params: Params) => string) {
  return async function payAction({ params, request }: ActionFunctionArgs) {
    try {
      const data = await request.json();

      const newID = await add(data, url(params));

      toast("Payment processed successfully", "success");
      return replace("/receptionist/payments/" + newID);
    } catch (error) {
      toast("Failed to process payment", "error");
      throw error;
    }
  };
}
