import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import formatLoaderUrl from "../formatters/formatLoaderUrl";
import getList from "@/api/getList";
import { z } from "zod";
import throwError from "../helpers/throwError";
import { schemas } from "../models/schema/schemasObject.ts";
import { rowSchemas } from "../models/schema/rowSchemasObject.ts";

export default function listLoader(entity: string): LoaderFunction {
  return async function ({ request }: LoaderFunctionArgs) {
    const searchParams = formatLoaderUrl(request.url);

    // if (entity.endsWith("Rows")) entity = entity.replace("Row", "");

    const data = await getList(entity + "?" + searchParams?.toString());

    const schema = (entity.endsWith("Rows") ? rowSchemas : schemas)[entity];

    if (!schema) {
      throwError(
        500,
        "Internal Server Error",
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    const apiSchema = z.tuple([z.array(schema), z.number()]);
    const result = apiSchema.safeParse(data);

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
