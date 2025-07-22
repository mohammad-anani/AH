import Delete from "@/api/delete";

import { useParams } from "react-router-dom";
import type { EntityKey } from "../models/types/util";

export default function deleteAction(entity: EntityKey) {
  return async function () {
    let response;
    const params = useParams();
    const ID = Number(params["ID"]);

    if (ID) {
      response = await Delete(entity + "s", ID);
    }

    console.log(response);
  };
}
