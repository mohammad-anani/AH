import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import findByID from "@/api/findByID";
import throwError from "../helpers/throwError";
import { schemas } from "../models/schema/schemasObject.ts";

export default function findByIDLoader(entity: string): LoaderFunction {
  return async function ({ params }: LoaderFunctionArgs) {
    const id = Number(params["id"]);

    if (!id || isNaN(id)) {
      throwError(400, "Bad request", "Invalid admin ID");
    }

    const data = await findByID(entity, id);

    const schema = schemas[entity];

    if (!schema) {
      throwError(
        500,
        "Internal Server Error",
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    const result = schema.safeParse(data);

    if (!result.success) {
      console.log(result.error);
      throwError(
        500,
        "Internal Server Error",
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    return data;
  };
}
