import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import findByID from "@/api/findByID";
import throwError from "../helpers/throwError";
import { schemas } from "../models/zod/schemas/schemas.ts";
import type { EntityKey } from "../models/types/utils/entityKeys.ts";
import pluralize from "pluralize";

export default function findByIDLoader(entity: EntityKey): LoaderFunction {
  return async function ({ params }: LoaderFunctionArgs) {
    const id = Number(params["id"]);

    if (!id || isNaN(id)) {
      throwError(400, "Invalid admin ID");
    }

    const data = await findByID(`/${pluralize(entity)}/${id}`);

    console.log(data);
    const schema = schemas[entity];

    if (!schema) {
      throwError(500, "Internal Server Error");
    }

    const result = schema.safeParse(data);

    if (!result.success) {
      console.log(result.error);
      throwError(
        500,

        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    return data;
  };
}
