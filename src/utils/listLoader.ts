import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import formatLoaderUrl from "./formatLoaderUrl";
import { getList } from "@/api/getList";

export default function listLoader(entity: string): LoaderFunction {
  return async function ({ request }: LoaderFunctionArgs) {
    const searchParams = formatLoaderUrl(request.url);
    const data = await getList(entity + "?" + searchParams?.toString());
    return data;
  };
}
