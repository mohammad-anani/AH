import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import formatLoaderUrl from "./formatLoaderUrl";
import { getList } from "@/api/getList";
import { z } from "zod";
import throwError from "./throwError";
import { schemas } from "./schemas";

export default function listLoader(entity: string): LoaderFunction {
  return async function ({ request }: LoaderFunctionArgs) {
    const searchParams = formatLoaderUrl(request.url);
    const data = await getList(entity + "?" + searchParams?.toString());

    const schema = schemas[entity];

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
      throwError(
        500,
        "Internal Server Error",
        "Sorry, we received unexpected data from the server. Please try again later.",
      );
    }

    return data;
  };
}
