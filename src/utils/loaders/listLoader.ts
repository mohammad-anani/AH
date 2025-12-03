import getList from "@/api/getList";
import type {
  LoaderFunction,
  LoaderFunctionArgs,
  Params,
} from "react-router-dom";
import { z } from "zod";

import * as pluralize from "pluralize";
import { toKebabCase } from "../formatters/toKebab.ts";
import throwError from "../helpers/throwError";
import { type FetchingEntityKey } from "../models/types/utils/entityKeys.ts";
import { rowSchemas } from "../models/zod/rowSchemas/rowSchemas.ts";

export default function listLoader(
  entity: FetchingEntityKey,
  pathPrefix?: (params: Params) => string,
  requiredParams: string[] | undefined = undefined,
  directUrl?: (params: Params) => string,
): LoaderFunction {
  return async function ({ params, request }: LoaderFunctionArgs) {


    const url = request.url;

    const searchParams = new URLSearchParams(
      url.substring(url.includes("?") ? url.indexOf("?") : url.length),
    );

    if (requiredParams)
      requiredParams.forEach((param) => {
        if (!searchParams.has(param)) throwError(400, "Bad request");
      });

    const data = await getList(
      directUrl?.(params) ||
      (pathPrefix?.(params) ?? "") +
      "/" +
      toKebabCase(pluralize.plural(entity)) +
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
      throwError(
        500,
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }
    return data;
  };
}
