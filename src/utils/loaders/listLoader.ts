import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import formatLoaderUrl from "../formatters/formatLoaderUrl";
import getList from "@/api/getList";
import { z } from "zod";
import throwError from "../helpers/throwError";
import { schemas } from "../models/schema/schemasObject.ts";
import { rowSchemas } from "../models/schema/rowSchemasObject.ts";
import type { EntityKey } from "../models/types/util.ts";
import { CountrySchema } from "../models/schema/schemas.ts";

export default function listLoader(
  entity: EntityKey | `${EntityKey}Row` | "Countries",
): LoaderFunction {
  return async function ({ request }: LoaderFunctionArgs) {
    const searchParams = formatLoaderUrl(request.url);

    const data = await getList(
      entity === "Countries"
        ? entity
        : ((entity +
            "s?" +
            searchParams?.toString()) as `${EntityKey}s${string}`),
    );

    const schema =
      entity === "Countries"
        ? CountrySchema
        : (entity.endsWith("Row") ? rowSchemas : schemas)[
            entity.replace("Row", "") as EntityKey
          ];

    if (!schema) {
      throwError(500, "Internal Server Error");
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
