import findByID from "@/api/findByID";
import * as pluralize from "pluralize";
import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { toKebabCase } from "../formatters/toKebab.ts";
import throwError from "../helpers/throwError";
import type { EntityKey } from "../models/types/utils/entityKeys.ts";
import { schemas } from "../models/zod/schemas/schemas.ts";

export default function findByIDLoader(entity: EntityKey): LoaderFunction {
  return async function ({ params }: LoaderFunctionArgs) {
    const id = Number(params["id"]);

    if (!id || isNaN(id)) {
      throwError(400, "Invalid ID");
    }

    const data = await findByID(
      `${toKebabCase(pluralize.plural(entity))}/${id}`,
    );
    const schema = schemas[entity];
    if (!schema) {
      throwError(500, "Internal schema error");
    }

    const result = schema.safeParse(data);
    console.log(result);


    if (!result.success) {
      throwError(
        500,
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }



    return data;
  };
}
