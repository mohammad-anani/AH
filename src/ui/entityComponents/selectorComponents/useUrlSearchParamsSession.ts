// useUrlSearchParamsSession.ts
import { useMemo } from "react";
import { useSessionStorage } from "@/utils/customHooks/useSessionStorage";

export function useUrlSearchParamsSession(
  key: string,
): [URLSearchParams, (params: URLSearchParams) => void] {
  const [urlParamsString, setUrlParamsString] = useSessionStorage(key, "");

  const urlSearchParams = useMemo(
    () => new URLSearchParams(urlParamsString),
    [urlParamsString],
  );

  const setUrlSearchParams = (params: URLSearchParams) => {
    setUrlParamsString(params.toString());
  };

  return [urlSearchParams, setUrlSearchParams];
}
