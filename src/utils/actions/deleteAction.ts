import Delete from "@/api/delete";

import { useParams } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import pluralize from "pluralize";

export default function deleteAction(entity: EntityKey) {
  return async function () {
    const params = useParams();
    const ID = Number(params["ID"]);

    if (!ID) {
      throw new Error("No ID provided for deletion");
    }

    const response = await Delete(`/${pluralize(entity)}/${ID}`);

    // Return success response with status
    return {
      success: true,
      status: response.status,
      message: "Item deleted successfully",
    };
  };
}
