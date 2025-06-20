import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { findByID } from "@/api/findByID";
import throwError from "./throwError";

export default function findByIDLoader(entity: string): LoaderFunction {
  return async function ({ params }: LoaderFunctionArgs) {
    const id = Number(params["id"]);

    if (!id || isNaN(id)) {
      throwError(400, "Bad request", "Invalid admin ID");
    }

    const data = await findByID(entity, id);
    return data;
  };
}
