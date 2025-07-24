// useSessionSyncedObject.ts
import { useEffect } from "react";
import { useSessionStorage } from "@/utils/customHooks/useSessionStorage";
import type { Setter } from "@/utils/models/types/util";

export function useSessionSyncedObject<T>(
  sessionKey: string,
  object: T | undefined,
  setObject: Setter<T | undefined>,
) {
  const [storedObject, setStoredObject] = useSessionStorage<T | undefined>(
    sessionKey,
    undefined,
  );

  useEffect(() => {
    if (storedObject !== undefined && storedObject !== object) {
      setObject(storedObject);
    }
  }, [storedObject, object, setObject]);

  return [storedObject, setStoredObject] as const;
}
