import Delete from "@/api/delete";

import { useParams } from "react-router-dom";
import type { EntityKey } from "../models/types/utils/entityKeys";
import pluralize from "pluralize";

export default function deleteAction(entity: EntityKey) {
  return async function () {
    let response;
    const params = useParams();
    const ID = Number(params["ID"]);

    if (ID) {
      response = await Delete(`/${pluralize(entity)}/${ID}`);
    }

    console.log(response);
  };
}
