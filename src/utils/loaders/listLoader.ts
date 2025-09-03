import type {
  LoaderFunction,
  LoaderFunctionArgs,
  Params,
} from "react-router-dom";
import formatLoaderUrl from "../formatters/formatLoaderUrl";
import getList from "@/api/getList";
import { z } from "zod";

import throwError from "../helpers/throwError";
import { rowSchemas } from "../models/zod/rowSchemas/rowSchemas.ts";
import { type FetchingEntityKey } from "../models/types/utils/entityKeys.ts";
import * as pluralize from "pluralize";

export default function listLoader(
  entity: FetchingEntityKey,
  pathPrefix?: (params: Params) => string,
  requiredParams: string[] | undefined = undefined,
): LoaderFunction {
  return async function ({ params, request }: LoaderFunctionArgs) {
    const searchParams = formatLoaderUrl(request.url);

    if (requiredParams)
      requiredParams.forEach((param) => {
        if (!searchParams.has(param)) throwError(400, "Bad request");
      });

    console.log(pluralize.plural(entity));
    const data = await getList(
      (pathPrefix?.(params) ?? "") +
        "/" +
        pluralize.plural(entity) +
        "?" +
        searchParams?.toString(),
    );

    const schema = rowSchemas[entity];

    if (!schema) {
      throwError(500, "Internal schema error");
    }

    const apiSchema = z.tuple([z.array(schema), z.number()]);
    const result = apiSchema.safeParse(data);

    if (!result.success) {
      // Log validation errors for debugging in
      throwError(
        500,
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    return data;
  };
}
