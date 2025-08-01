import type {
  LoaderFunction,
  LoaderFunctionArgs,
  Params,
} from "react-router-dom";
import formatLoaderUrl from "../formatters/formatLoaderUrl";
import getList from "@/api/getList";
import { z } from "zod";
import pluralize from "pluralize";
import throwError from "../helpers/throwError";
import { schemas } from "../models/zod/schemas/schemas.ts";
import { rowSchemas } from "../models/zod/rowSchemas/rowSchemas.ts";
import {
  type EntityKey,
  type FetchingEntityKey,
} from "../models/types/utils/entityKeys.ts";

export default function listLoader(
  entity: FetchingEntityKey | `${EntityKey}Row`,
  pathPrefix?: (params: Params) => string,
  requiredParams: string[] | undefined = undefined,
): LoaderFunction {
  return async function ({ params, request }: LoaderFunctionArgs) {
    const searchParams = formatLoaderUrl(request.url);

    if (requiredParams)
      requiredParams.forEach((param) => {
        if (!searchParams.has(param)) throwError(400, "Bad request");
      });

    const isRow = entity.endsWith("Row");
    const entityName = (isRow ? entity.slice(0, -3) : entity) as EntityKey;

    console.log(
      (pathPrefix?.(params) ?? "") +
        "/" +
        pluralize(entity) +
        "?" +
        searchParams?.toString(),
    );

    const data = await getList(
      (pathPrefix?.(params) ?? "") +
        "/" +
        pluralize(entity) +
        "?" +
        searchParams?.toString(),
    );

    const schema = isRow ? rowSchemas[entityName] : schemas[entityName];

    if (!schema) {
      throwError(500, "Internal Server Error");
    }

    const apiSchema = z.tuple([z.array(schema), z.number()]);
    const result = apiSchema.safeParse(data);

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
