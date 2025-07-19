import Delete from "@/api/delete";

import { useParams } from "react-router-dom";

export default function deleteAction(entity: string) {
  return async function () {
    let response;
    const params = useParams();
    const ID = Number(params["ID"]);

    if (ID) {
      response = await Delete(entity, ID);
    }

    console.log(response);
  };
}
