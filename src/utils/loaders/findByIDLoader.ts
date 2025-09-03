import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import findByID from "@/api/findByID";
import throwError from "../helpers/throwError";
import { schemas } from "../models/zod/schemas/schemas.ts";
import type { EntityKey } from "../models/types/utils/entityKeys.ts";
import * as pluralize from "pluralize";

export default function findByIDLoader(entity: EntityKey): LoaderFunction {
  return async function ({ params }: LoaderFunctionArgs) {
    const id = Number(params["id"]);

    if (!id || isNaN(id)) {
      throwError(400, "Invalid ID");
    }

    //to be changed
    const data = await findByID(`${pluralize.plural(entity)}/${id}`);
    const schema = schemas[entity];
    if (!schema) {
      throwError(500, "Internal schema error");
    }

    const result = schema.safeParse(data);
    console.log(result);
    if (!result.success) {
      // Log validation errors for debugging in development
      if (import.meta.env.DEV) {
        console.error("API validation error:", result.error);
      }
      throwError(
        500,
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    return data;
  };
}
